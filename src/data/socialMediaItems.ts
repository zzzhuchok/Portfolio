export type SocialMediaItemsType = {
  id: number;
  href: string;
  iconId: string;
  width: string;
  height: string;
  title: string;
};

export const SOCIAL_MEDIA_ITEMS: Array<SocialMediaItemsType> = [
  {
    id: 0,
    href: "https://github.com/zzzhuchok",
    iconId: "socialGithub",
    width: "30",
    height: "30",
    title: "GitHub",
  },
  {
    id: 1,
    href: "https://x.com/",
    iconId: "socialTwit",
    width: "30",
    height: "30",
    title: "X",
  },
  {
    id: 2,
    href: "https://linkedin.com/",
    iconId: "socialLinkedIn",
    width: "30",
    height: "30",
    title: "LinkedIn",
  },
];
