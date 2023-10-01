export type Testimonials = {
  slice(arg0: number): unknown;
  filter(testimonials: Testimonials): unknown;
  _id: string;
  _createdAt: Date;
  title: string;
  name: string;
  image: string;
  content: string;
};
