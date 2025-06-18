export interface CaseStudy {
  id: string;
  date: string;
  url?: string;
  score: number;
}

const caseStudies = [
  {
    id: "monark_website",
    url: "https://monark.io",
    date: "2025-02-28",
    score: 8,
  },
  {
    id: "anthony_king_website",
    url: "https://anthonyking.ca",
    date: "2024-05-10",
    score: 8,
  },
  // {
  //   id: "quickdocs_website",
  //   url: "https://quickdocs.ca",
  //   date: "2024-02-29",
  //   score: 6,
  // },
  // {
  //   id: "quickdocs_blog",
  //   url: "https://blog.quickdocs.ca",
  //   date: "2024-02-29",
  //   score: 6,
  // },
  // {
  //   id: "dominicf96_portfolio_2024",
  //   date: "2024-01-23",
  //   score: 7,
  // },
  {
    id: "pinax_app",
    url: "https://app.pinax.network",
    date: "2023-11-18",
    score: 7,
  },
  {
    id: "pinax_website",
    url: "https://pinax.network",
    date: "2023-08-01",
    score: 8,
  },
  {
    id: "eosnation_ens",
    url: "https://eosnameservice.io",
    date: "2023-05-01",
    score: 6,
  },
  // {
  //   id: "pinax_subtivity",
  //   date: "2023-03-01",
  //   score: 4,
  // },
  {
    id: "eosnation_spyglass",
    url: "https://spyglass.network",
    date: "2023-01-01",
    score: 4,
  },
  {
    id: "oreus_website",
    // url: "https://oreus.ca",
    date: "2022-11-01",
    score: 7,
  },
  {
    id: "oreus_balance_website",
    url: "https://balance.oreus.dominicfournier.com",
    date: "2021-07-01",
    score: 6,
  },
  {
    id: "fanslab_webapp",
    url: "https://fanslab.com",
    date: "2020-07-20",
    score: 6,
  },
];

export default caseStudies;
