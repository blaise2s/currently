import { Box } from '@mui/material';
import mapboxgl, { Map, Marker } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';
import { MAPBOX_API_KEY, OPEN_WEATHER_MAP_API_KEY } from '../../config';
import { Location } from '../../services/locationServices';

mapboxgl.accessToken = MAPBOX_API_KEY;

type RadarProps = {
  location?: Location;
  initialZoom?: number;
};

export const Radar = ({ location, initialZoom = 9 }: RadarProps) => {
  const mapContainerRef = useRef<HTMLDivElement>();
  const mapRef = useRef<Map>();

  const latitude = location?.lat;
  const longitude = location?.lon;

  useEffect(() => {
    if (!latitude || !longitude || !mapContainerRef.current) {
      return;
    }

    const lonLat: [number, number] = [
      parseFloat(`${longitude}`),
      parseFloat(`${latitude}`),
    ];

    mapRef.current = new Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: lonLat,
      zoom: initialZoom,
    });

    mapRef.current.on('load', () => {
      if (!mapRef.current) {
        return;
      }

      new Marker({ color: 'red' }).setLngLat(lonLat).addTo(mapRef.current);

      mapRef.current.addSource('radar-source', {
        type: 'raster',
        tiles: [
          `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${OPEN_WEATHER_MAP_API_KEY}`,
        ],
        tileSize: 256,
      });

      mapRef.current.addLayer({
        id: 'radar-layer',
        type: 'raster',
        source: 'radar-source',
        paint: {},
      });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [longitude, latitude, initialZoom]);

  return <Box ref={mapContainerRef} sx={{ display: 'flex', height: '100%' }} />;
};
