import type { TailwindColor } from "@/utils/types/tailwind";

type Theme = {
  colors: {
    primary: TailwindColor;
    secondary: TailwindColor;
    blur: {
      top: TailwindColor;
      bottom: TailwindColor;
    };
  };
};

const theme: Theme = {
  colors: {
    primary: "orange",
    secondary: "purple",
    blur: {
      top: "amber",
      bottom: "purple",
    },
  },
};

export default theme;
