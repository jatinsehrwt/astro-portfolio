export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Portfolio",
    techs: ["Astro", "TailwindCSS"],
    link: "/",
  },
];

export default projects;
