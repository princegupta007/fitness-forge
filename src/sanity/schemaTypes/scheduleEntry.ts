import { defineField, defineType } from "sanity";

export default defineType({
  name: "scheduleEntry",
  title: "Schedule Entry",
  type: "document",
  fields: [
    defineField({
      name: "day",
      title: "Day of Week",
      type: "string",
      options: {
        list: [
          { title: "Monday", value: "monday" },
          { title: "Tuesday", value: "tuesday" },
          { title: "Wednesday", value: "wednesday" },
          { title: "Thursday", value: "thursday" },
          { title: "Friday", value: "friday" },
          { title: "Saturday", value: "saturday" },
          { title: "Sunday", value: "sunday" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "time",
      title: "Time",
      type: "string",
      description: "e.g., 08:00 AM - 09:00 AM",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "className",
      title: "Class Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "trainer",
      title: "Trainer",
      type: "reference",
      to: [{ type: "trainer" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
