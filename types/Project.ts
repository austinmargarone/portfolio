import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  image: string;
  url: string;
  desktop_image: string;
  mobile_image: string;
  demo_site: string;
  source_cod: string;
  my_role: string;
  start_date: string;
  end_date: string;
  tech_stack: string;
  description: PortableTextBlock[];
  place_image: string;
  design_image: string;
  challenge_one: string;
  challenge_two: string;
  challenge_three: string;
  learnings_one: string;
  learnings_two: string;
  learnings_three: string;
  learnings_four: string;
};
