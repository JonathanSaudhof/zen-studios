export default {
  type: "object",
  name: "socialMedia",
  fieldsets: [{ name: "social", title: "Social media handles" }],
  fields: [
    {
      title: "Platform",
      name: "platform",
      type: "string",
      options: {
        list: [
          { value: "twitter", title: "Twitter" },
          { value: "facebook", title: "Facebook" },
          { value: "instagram", title: "Instagram" },
          { value: "youtube", title: "YouTube" },
        ],
      },
    },
    {
      title: "Profile Link",
      name: "url",
      type: "string",
    },
  ],
};
