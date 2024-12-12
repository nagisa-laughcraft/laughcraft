import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'laughcraft',
  apiKey: process.env.API_KEY,
});