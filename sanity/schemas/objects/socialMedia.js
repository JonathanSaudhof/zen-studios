export default {
  type: 'object',
  name: 'socialMedia',
  fieldsets: [{ name: 'social', title: 'Social media handles' }],
  fields: [
    {
      title: 'Twitter',
      name: 'twitter',
      type: 'string',
      fieldset: 'social',
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'string',
      fieldset: 'social',
    },
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'string',
      fieldset: 'social',
    },
    {
      title: 'YouTube',
      name: 'youtube',
      type: 'string',
      fieldset: 'social',
    },
    {
      title: 'Github',
      name: 'github',
      type: 'string',
      fieldset: 'social',
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'string',
      fieldset: 'social',
    },
  ],
};
