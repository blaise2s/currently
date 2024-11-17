import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from '@mui/material';
import { Article } from '../../services/newsServices';

interface HeadlineProps {
  headline: Article;
}

export const Headline = ({ headline }: HeadlineProps) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        sx={{ height: '12rem', overflow: 'auto', alignItems: 'flex-start' }}
        title={headline.title || ''}
        subheader={headline.author || ''}
      />
      <CardMedia component='img' image={headline.urlToImage || ''} />
      <CardContent sx={{ flex: 1 }}>{headline.description || ''}</CardContent>
      <CardActions>
        <Button
          size='small'
          onClick={() => {
            if (headline.url) {
              window.open(headline.url, '_blank');
            }
          }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
