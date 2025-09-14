import { BlocksContent } from "@strapi/blocks-react-renderer";

export type NewsEvent = {
  id: number;
  type: "News" | "Event";
  date: Date;
  title: string;
  description: string;
  img: string;
  content: BlocksContent | ""; // content can be empty string if not needed
};

export type Lab = {
  id: number;
  title: string;
  short: string;
  lead: string;
  logo: string;
  full: string;
  type: string;
  website: string;
  foreground: string;
  background: string;
  backgroundDim: string;
};

export type ResearchProject = {
  id: number;
  title: string;
  description: string;
  source?: string;
  faculty?: string;
  duration: {
    from: string;
    to?: string;
  };
  image: {
    width?: number;
    height?: number;
    url: string;
  };
  fullDescription: string;
};

export type ResearchPublication = {
  id: number;
  year: number;
  authors: string[];
  lab?: string;
  category: string;
  title: string;
  description: string;
  venueImage?: string;
  tags: string[];
  link: string;
};

export type Course = {
  id: number;
  credits: string;
  title: string;
  acronym: string;
  code: string;
  prerequisites: string;
  mandatory: boolean;
  url: string;
};

export type People = {
  id: number;
  name: string;
  description: string | React.ReactNode;
  img: string;
  link?: string;
};