export type PortfolioType = {
  id: number;
  title: string;
  image: string;
  views: number;
  stars: number;
  desc: string;
  skill: Array<string>;
};

export type BoardObj = {
  id: number;
  title: string;
  list: PortfolioType[];
};

export type UserObj = {
  id: number;
  name: string;
  grade: number;
  skills: string;
  school: string;
  major: string;
};

export type ServiceType = {
  title: string;
  desc: string;
  skill: string[];
};
