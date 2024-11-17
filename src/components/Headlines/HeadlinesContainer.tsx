import { Box, Grid2 as Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Article, getHeadlines } from '../../services/newsServices';
import { Loading } from '../common/Loading';
import { Headline } from './Headline';

export const HeadlinesContainer = () => {
  const [loadingHeadlines, setLoadingHeadlines] = useState(true);
  const [headlines, setHeadlines] = useState<Article[]>([]);

  useEffect(() => {
    getHeadlines({ pageSize: 21, category: 'sports' })
      .then((response) => setHeadlines(response.articles))
      .finally(() => setLoadingHeadlines(false));
  }, []);

  return (
    <>
      {loadingHeadlines ? (
        <Box py='10rem'>
          <Loading
            additionalDetails={
              <Typography pt='1rem'>Loading headlines...</Typography>
            }
          />
        </Box>
      ) : (
        <Grid container spacing={2} p='1rem'>
          {headlines.map((headline, index) => {
            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                <Headline headline={headline} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};
