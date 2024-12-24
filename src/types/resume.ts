export interface Resume {
  basics: {
    name: string;
    title: string;
    currentPosition: string;
    image: string;
    about: string;
    location: string;
    email: string;
    website: string;
    linkedin: string;
  };
  experience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string[];
    tags: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
    description: string[];
  }[];
  certificates: {
    name: string;
    date: string;
  }[];
  skills: string[];
  languages: string[];
}
