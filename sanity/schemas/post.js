import { RiArticleLine } from "react-icons/ri";
export default {
  name: "post",
  title: "Post",
  type: "document",
  icon: RiArticleLine,
  initialValue: {
    featured: false,
    publishedAt: new Date().toISOString(),
    categories: "nocategorys",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.max(50).warning("Shorter titles are usually better"),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule) =>
        Rule.max(80).warning("Shorter excerpts are usually better"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    { name: "featured", title: "Featured", type: "boolean" },
    {
      name: "seo",
      title: "SEO",
      type: "seo-tools", // use seo-tools type
      options: {
        baseUrl: "https://jonathansaudhof.de/", // (REQUIRED) This is the baseUrl for your site
        baseUrl(doc) {
          return "https://jonathansaudhof.de/blog/"; // for dynamic baseUrls
        },
        slug(doc) {
          // (REQUIRED) a function to return the sug of the current page, which will be appended to the baseUrl
          return doc.slug.current;
        },
        fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
        content(doc) {
          return "simple html representation of your doc"; // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
        },
        title(doc) {
          return "page title"; // (OPTIONAL) return page title otherwise inferred from scrape
        },
        description(doc) {
          return "page description"; // (OPTIONAL) return page description otherwise inferred from scrape
        },
        locale(doc) {
          return "page locale"; // (OPTIONAL) return page locale otherwise inferred from scrape
        },
        contentSelector: "body", // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
      },
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
