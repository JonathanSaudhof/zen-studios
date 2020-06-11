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
      title: "Content",
      type: "blockContent",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "button",
      title: "Button",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
