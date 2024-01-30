const cases = {
  name: "cases",
  title: "cases",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "image",
      title: "Image",
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
      name: "case_study",
      title: "Case Study",
      type: "string",
    },
    {
      name: "bg",
      title: "bg",
      type: "string",
    },
    {
      name: "id",
      title: "id",
      type: "string",
    },
  ],
};

export default cases;
