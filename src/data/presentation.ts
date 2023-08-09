import { string } from "astro/zod";

type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "jatin.sehrawat08@gmail.com",
  title: "Hi, I'm Jatin Sehrawat 👋",
  profile: "/profile-picture.jpg",
  description:
    "Hello, I'm an *Indian developer* with over *2 years* of web experience. I am _currently_ studying *Master's in Computer Science* from University of Delhi. Always a curious and creative person, trying to learn and grow. Wandering with bliss",
  socials: [
    {
      label: "E-mail",
      link: "mailto:jatin.sehrawat08+website@gmail.com",
    },
    {
      label: "Twitter",
      link: "https://twitter.com/jatinsehrwt",
    },
    {
      label: "Github",
      link: "https://github.com/jatinsehrwt",
    },
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/jatinsehrwt",
    },
    // {
    //   label: "Instagram",
    //   link: "https://instagram.com/jatinsehrwt",
    // },
  ],
};

export default presentation;
