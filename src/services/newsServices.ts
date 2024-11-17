import axios from 'axios';
// import { NEWS_API_KEY } from '../config';

interface ArticleSource {
  id: string;
  name: string;
}

export interface Article {
  source: ArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface HeadlinesResponse {
  status: 'ok' | 'error';
  code?: string;
  message?: string;
  totalResults: number;
  articles: Article[];
}

type NewsCategory =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';
export interface GetHeadlineParams {
  category?: NewsCategory;
  sources?: string;
  q?: string;
  pageSize?: number;
  page?: number;
}

export const getHeadlines = async (params?: GetHeadlineParams) => {
  return axios
    .get<HeadlinesResponse>('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us',
        apiKey: import.meta.env.VITE_NEWS_API_KEY || '',
        ...(params && params),
      },
    })
    .then((response) => response.data);
};
