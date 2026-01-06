import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'gymName',
      title: 'Gym Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform' },
            { name: 'url', type: 'url', title: 'URL' },
          ],
        },
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Hero Stats',
      type: 'object',
      fields: [
        { name: 'members', type: 'string', title: 'Members Count (e.g. 500+)' },
        { name: 'trainers', type: 'string', title: 'Trainers Count (e.g. 15+)' },
        { name: 'programs', type: 'string', title: 'Programs Count (e.g. 30+)' },
      ],
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Map Embed URL',
      type: 'url',
      description: 'The URL from the "Embed a map" tab on Google Maps',
    }),
  ],
})
