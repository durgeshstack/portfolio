import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@durgeshstack",
    icon: Icons.gitHub,
    link: "https://github.com/durgeshstack",
  },
  {
    name: "LinkedIn",
    username: "Durgesh Kumar",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/durgesh-kumar-203a47275",
  },

  {
    name: "Gmail",
    username: "durgeshksm2000",
    icon: Icons.gmail,
    link: "mailto:durgeshksm2000@gmail.com",
  },
];
