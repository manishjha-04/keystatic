import { config, fields, collection } from '@keystatic/core';

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'app/content/posts/*',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
      },
      hooks: {
        formats: { contentField: 'content' }
      },
    }),
  },
});
