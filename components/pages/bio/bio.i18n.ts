export interface I18n {
    hi_1: string;
    hi_2: string;
    intro: string;
    content_1: string;
    content_2: string;
    content_3: string;
    content_4: string;
    content_5: string;
    content_6: string;
    content_7: string;
    content_8: string;
    content_9: string;
}

const en: I18n = {
    hi_1: "Hey,",
    hi_2: "I'm Dominic.",
    intro: "While this portfolio mainly showcases my work, I wanted to include a more personal section; in case you'd like to get to know the person behind the code.",
    content_1: "I'm a Canadian (Québécois) born in Montreal in the 90s. I grew up playing outside, exploring the big open fields of my developing neighborhood. From make-believe adventures to half-finished treehouses that eventually got torn down for new construction; those days of biking and exploring shaped a big part of who I am and still hold a special place in my heart.",
    content_2: "Later, I picked up the guitar and kept it close for about 10 years. My teenage soundtrack was a mix of Billy Talent, Green Day, Disturbed, Avenged Sevenfold; then later Skrillex and the whole Dubstep wave that hit us all.",
    content_3: "Around the same time, I started playing baseball, which filled every summer with games, tournaments, and finals; about 22 games each season. When I was 18, our team took third place in the Quebec provincial championships. Good times.",
    content_4: "Then came video games. Oh boy. I built endless Minecraft mansions, bridges, and roads. I played Counter-Strike semi-competitively, APB Reloaded (if you remember it, you know how good it was), Conquer Online, Skyrim, No Man's Sky, Stardew Valley; you name it, I probably tried it.",
    content_5: "After high school, I entered Cégep de Maisonneuve in a Computer Systems program; a hybrid between hardware and software. I made some great friendships there, and we became regulars at a nearby Asian express restaurant that served the best General Tao chicken I've had to this day. Those were good years; great teachers, great courses, and where I discovered my passion for programming, web development, and technology. I still have fond memories of my time there and the people who taught there.",
    content_6: "Then came university; three years at ÉTS (École de Technologie Supérieure) in Software Engineering. Most of my Cégep friends went into Electrical Engineering, so it was a fresh start for me. I deepened my knowledge in networking, programming patterns and architecture, statistics, math, chemistry, physics, and more.",
    content_7: "Then the pandemic arrived, a few months after I moved into my first apartment. I lost the little motivation I had left for my studies, stuck between two advanced math courses that were hard to follow and remote learning. Confident in my skills and pushed by the loss of my job due to COVID-related cuts, I decided to put my studies on hold to focus on my career and entrepreneurial projects.",
    content_8: "I then turned to freelance work, which allowed me to put into practice the skills I had developed during my transition into the professional world. A few months later, I joined Fanslab, where I focused my energy on building my career.",
    content_9: "Today, I keep learning, taking on new challenges, and contributing to projects that make a real impact. My goal is to stay curious, efficient, and creative, while sharing my passion for technology with those around me."
};

const fr: I18n = {
    hi_1: "Bonjour,",
    hi_2: "je suis Dominic.",
    intro: "Ce portfolio sert principalement à présenter mon travail, mais j'ai voulu y inclure une section plus personnelle; au cas où vous voudriez en savoir un peu plus sur la personne derrière le code.",
    content_1: "Je suis Canadien (Québécois), né à Montréal dans les années 90. J'ai grandi à jouer dehors, à explorer les grands champs de mon quartier en développement. Entre les aventures imaginaires et les cabanes dans les arbres à moitié terminées (qui finissaient toujours par être démolies pour laisser place à de nouvelles constructions), ces journées passées à pédaler et explorer ont façonné une grande partie de qui je suis, et gardent encore aujourd'hui une place spéciale dans mon cœur.",
    content_2: "Plus tard, j'ai commencé la guitare, que j'ai gardée près de moi pendant environ dix ans. La bande sonore de mon adolescence, c'était un mélange de Billy Talent, Green Day, Disturbed, Avenged Sevenfold, puis plus tard Skrillex et toute la vague Dubstep qui nous a tous frappés.",
    content_3: "À la même époque, j'ai commencé à jouer au baseball, ce qui remplissait tous mes étés de matchs, de tournois et de finales; environ 22 matchs par saison. À 18 ans, notre équipe a terminé troisième au championnat provincial du Québec. De bons souvenirs.",
    content_4: "Puis sont venus les jeux vidéo. Ah là là. J'ai construit d'innombrables manoirs, ponts et routes dans Minecraft. J'ai joué à Counter-Strike de façon semi-compétitive, à APB Reloaded (si vous vous en souvenez, vous savez à quel point c'était bon), Conquer Online, Skyrim, No Man's Sky, Stardew Valley…  un jeu, je l'ai probablement essayé.",
    content_5: "Après le secondaire, je suis entré au Cégep de Maisonneuve en Systèmes Informatiques; un programme hybride entre matériel et logiciel. J'y ai créé de belles amitiés, et on était des habitués d'un petit resto asiatique tout près qui servait le meilleur poulet Général Tao que j'ai mangé à ce jour. C'étaient de bonnes années : d'excellents profs, d'excellents cours, et c'est là que j'ai découvert ma passion pour la programmation, le développement web et la technologie. J'en garde encore aujourd'hui de très bons souvenirs.",
    content_6: "Ensuite, direction l'université : trois ans à l'ÉTS (École de technologie supérieure) en Génie logiciel. La plupart de mes amis du cégep sont partis en Génie électrique, donc c'était un nouveau départ pour moi. J'y ai approfondi mes connaissances en réseaux, en architecture et patrons de programmation, en statistiques, mathématiques, chimie, physique, et plus encore.",
    content_7: "Puis la COVID est arrivée, quelques mois après mon emménagement dans mon premier appartement. J'ai alors perdu le peu de motivation qu'il me restait pour mes études, coincé entre deux cours de maths avancés difficiles à suivre et les cours à distance. Confiant dans mes compétences et poussé par la perte de mon emploi due aux coupures liées à la pandémie, j'ai décidé de mettre mes études en pause pour me concentrer sur ma carrière et mes projets entrepreneuriaux.",
    content_8: "Je me suis alors tourné vers le travail en freelance, ce qui m'a permis de mettre en pratique les compétences acquises pendant ma transition vers le monde professionnel. Quelques mois plus tard, j'ai rejoint Fanslab, où j'ai concentré mon énergie sur ma carrière.",
    content_9: "Aujourd'hui, je continue de me former, de relever de nouveaux défis et de contribuer à des projets qui ont un réel impact. Mon objectif est de rester curieux, efficace et créatif, tout en partageant ma passion pour la technologie avec ceux qui m'entourent."
};

const locales = { en, fr };
export default locales;
