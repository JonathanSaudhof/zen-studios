import { RiMenuAddLine } from "react-icons/ri";
export default {
  name: "landingPageSection",
  title: "Landing page section",
  type: "document",
  icon: RiMenuAddLine,
  fields: [
    {
      name: "title",
      title: "Title German",
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
    // {
    //   name: "button",
    //   title: "Button",
    //   type: "url",
    // },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
