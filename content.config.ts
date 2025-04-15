import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    news: defineCollection({
      type: 'page',
      source: 'news/atlas-ice-launches-newest-product-the-chillaiz-ice-cup-designed-by-snappymob-fourdigit-malaysia.md'
    }),
  }
});

