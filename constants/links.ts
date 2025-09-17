export interface NavbarLink {
  key: string;
  url: string;
}

const navbarLinks = [
  { key: "web", url: "/web"},
  { key: "brands", url: "/brands"},
  { key: "articles", url: "https://blog.dominicfournier.com" },
  // { key: "games", url: "/games"},
];

export default navbarLinks;
