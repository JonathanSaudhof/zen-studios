import { FiNavigation } from "react-icons/fi";

export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: FiNavigation,
  initialValue: {
    name: "primary",
  },
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      options: {
        list: [
          { value: "primary", title: "Primary navigation" },
          { value: "secondary", title: "Secondary navigation" },
        ],
      },
    },
    {
      title: "Pages",
      name: "items",
      type: "array",
      of: [{ type: "reference", to: { type: "page" } }],
      options: {
        sortable: true,
      },
    },
  ],
};
