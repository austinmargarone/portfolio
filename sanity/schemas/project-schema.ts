const project = {
  name: "project",
  title: "project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "desktop",
      title: "Desktop",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "demo_site",
      title: "Demo Site",
      type: "url",
    },
    {
      name: "source_code",
      title: "Source Code",
      type: "url",
    },
    {
      name: "my_role",
      title: "My Role",
      type: "string",
    },
    {
      name: "start_date",
      title: "Start Date",
      type: "string",
    },
    {
      name: "end_date",
      title: "End Date",
      type: "string",
    },
    {
      name: "tech",
      title: "Tech Images",
      type: "array",
      of: [
        {
          type: "tech",
        },
        {
          title: "URL",
          name: "urlObject",
          type: "object",
          fields: [
            {
              title: "URL",
              name: "urlField",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "problem",
      title: "Problem Statement",
      type: "string",
    },
    {
      name: "accent",
      title: "Accent",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "design",
      title: "Design",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "learnings",
      title: "Learnings",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default project;
