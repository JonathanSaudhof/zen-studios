export default {
  name: "siteSetting",
  title: "Site Settings",
  type: "document",
  initialValue: {
    online: true,
  },
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
    },
    {
      name: "favIcon",
      title: "Fav Icon",
      type: "image",
    },
    {
      name: "brandLogo",
      title: "Brand logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    { name: "online", title: "Page Online", type: "boolean" },
  ],
};
