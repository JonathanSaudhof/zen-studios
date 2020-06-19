import { FiArchive } from "react-icons/fi";
export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: FiArchive,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
