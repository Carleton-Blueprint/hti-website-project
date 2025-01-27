import { defineType } from 'sanity';

export default defineType({
  name: 'formLink',
  title: 'Form Link',
  type: 'document',
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
});