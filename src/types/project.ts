export type Project = {
  title: string;
  thumb: ImageMetadata;
  description: string;
  live: string;
  repository: string;
  tech: string;
  why: {
    title: string;
    data: string;
  };
  learned: {
    title: string;
    data: string;
  };
};
