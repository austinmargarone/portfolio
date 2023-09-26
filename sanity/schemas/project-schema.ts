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
      options: { source: "name" },
    },
    {
      name: "desktop_image",
      title: "Desktop Image",
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
      name: "mobile_image",
      title: "Mobile Image",
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
      name: "tech_stack",
      title: "Tech Stack",
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
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "place_image",
      title: "Place Image",
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
      name: "design_image",
      title: "Design Image",
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
      name: "challenges_array",
      title: "Challenges Array",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "learnings_array",
      title: "Learnings Array",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default project;
