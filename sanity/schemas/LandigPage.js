export default {
  name: "landingPageSection",
  title: "Landing page section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "content",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
