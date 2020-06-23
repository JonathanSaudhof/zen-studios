// TODO - add SEO Tags
import { RiPagesLine } from "react-icons/ri";
export default {
  name: "page",
  title: "Page",
  type: "document",
  icon: RiPagesLine,
  initialValue: {
    type: "single",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "type",
      title: "This site is a category page",
      type: "string",
      options: {
        list: [
          { value: "category", title: "Blog Category Page" },
          { value: "redirect", title: "Redirection" },
          { value: "single", title: "Single Page" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "redirect",
      title: "URL for redirect (Redirection)",
      type: "string",
    },
    {
      name: "category",
      title: "Category (Blog Category Page)",
      type: "reference",
      to: { type: "category" },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
