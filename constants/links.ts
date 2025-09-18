export interface NavbarLink {
  key: string;
  url: string;
}

const navbarLinks = [
  { key: "case_studies", url: "/case_studies"},
  { key: "brands", url: "/brands"},
  { key: "articles", url: "/articles" },
  // { key: "games", url: "/games"},
];

export default navbarLinks;
