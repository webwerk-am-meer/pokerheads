type NavigationLink = {
  name: string;
  link: string;
};

type NavigationLinks = {
  start: NavigationLink;
  ranking: NavigationLink;
  training: NavigationLink;
  app: NavigationLink;
  blogs: NavigationLink;
};

export const allLinks: NavigationLinks = {
  start: {
    name: "Start",
    link: "/",
  },
  ranking: {
    name: "Rangliste",
    link: "/rangliste",
  },
  app: {
    name: "App",
    link: "/app",
  },
  training: {
    name: "Training",
    link: "/training",
  },
  blogs: {
    name: "Blogs",
    link: "/blogs",
  }
};

export const allDestinies = Object.values(allLinks);
