import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'trainer',
  title: 'Trainer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'specialization',
      title: 'Specialization',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
