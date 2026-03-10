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
    intro: "This portfolio showcases my work, but this page is about the person behind it. No résumé here; just the story.",
    content_1: "I'm a Québécois born in Montreal in the 90s. I grew up playing outside, exploring the open fields of a neighborhood still under construction. Make-believe adventures, half-finished treehouses torn down for new builds, endless bike rides; those days shaped who I am more than I realized at the time.",
    content_2: "I picked up the guitar around 12 and kept it close for about ten years. My teenage soundtrack was Billy Talent, Green Day, Disturbed, Avenged Sevenfold; then Skrillex and the whole Dubstep wave hit.",
    content_3: "Baseball filled every summer; about 22 games per season between tournaments and league play. At 18, our team placed third at the Quebec provincial championships.",
    content_4: "Then came video games. I built endless Minecraft worlds, played Counter-Strike semi-competitively, sank hours into APB Reloaded (if you know, you know), Conquer Online, Skyrim, No Man's Sky, Stardew Valley; you name it, I probably tried it.",
    content_5: "After high school, I studied Computer Systems at Cégep de Maisonneuve; a program bridging hardware and software. Great teachers, great friendships, and the best General Tao chicken from a nearby Asian restaurant that I still think about. That's where I discovered my passion for programming and web development.",
    content_6: "Then came three years of Software Engineering at ÉTS (École de Technologie Supérieure). A fresh start, and a deep dive into architecture, networking, programming patterns, and all the math and science that comes with an engineering degree.",
    content_7: "When the pandemic hit, I made the call to leave university and go all-in on my career. I started freelancing, which gave me the hands-on experience that no classroom could replicate.",
    content_8: "That path led me to Fanslab, then to Cactusoft, where I currently work as Lead UX Designer. I focus on raising UX standards across development teams and pushing the design system forward; building components that make developers faster and users happier.",
    content_9: "I'm driven by the overlap between design and engineering; understanding both sides lets me ship work that's not just well-designed, but well-built."
};

const fr: I18n = {
    hi_1: "Bonjour,",
    hi_2: "je suis Dominic.",
    intro: "Ce portfolio présente mon travail, mais cette page parle de la personne derrière. Pas de CV ici; juste l'histoire.",
    content_1: "Je suis Québécois, né à Montréal dans les années 90. J'ai grandi à jouer dehors, à explorer les champs d'un quartier encore en construction. Aventures imaginaires, cabanes dans les arbres à moitié terminées démolies pour faire place aux nouvelles maisons, tours de vélo sans fin; ces journées-là m'ont façonné plus que je ne le réalisais à l'époque.",
    content_2: "J'ai commencé la guitare vers 12 ans et je l'ai gardée près de moi pendant une dizaine d'années. La bande sonore de mon adolescence : Billy Talent, Green Day, Disturbed, Avenged Sevenfold; puis Skrillex et toute la vague Dubstep.",
    content_3: "Le baseball remplissait tous mes étés; environ 22 matchs par saison entre les tournois et la ligue. À 18 ans, notre équipe a terminé troisième au championnat provincial du Québec.",
    content_4: "Puis les jeux vidéo sont arrivés. J'ai construit des mondes entiers dans Minecraft, joué à Counter-Strike de façon semi-compétitive, passé des heures sur APB Reloaded (si tu connais, tu sais), Conquer Online, Skyrim, No Man's Sky, Stardew Valley; nomme-le, je l'ai probablement essayé.",
    content_5: "Après le secondaire, j'ai étudié en Systèmes informatiques au Cégep de Maisonneuve; un programme entre matériel et logiciel. D'excellents profs, de belles amitiés, et le meilleur poulet Général Tao d'un petit resto asiatique à côté auquel je repense encore. C'est là que j'ai découvert ma passion pour la programmation et le développement web.",
    content_6: "Ensuite, trois ans en Génie logiciel à l'ÉTS (École de technologie supérieure). Un nouveau départ, et une plongée en profondeur dans l'architecture, les réseaux, les patrons de programmation, et toutes les maths et sciences qui viennent avec un programme d'ingénierie.",
    content_7: "Quand la pandémie est arrivée, j'ai fait le choix de quitter l'université pour me lancer à fond dans ma carrière. J'ai commencé en freelance, ce qui m'a donné une expérience terrain qu'aucun cours ne pouvait reproduire.",
    content_8: "Ce parcours m'a mené chez Fanslab, puis chez Cactusoft, où je travaille actuellement comme Designer UX Principal. Je me concentre sur l'élévation des standards UX à travers les équipes de développement et l'évolution constante du design system; créer des composants qui rendent les développeurs plus rapides et les utilisateurs plus satisfaits.",
    content_9: "Ce qui me motive, c'est l'intersection entre le design et l'ingénierie; comprendre les deux côtés me permet de livrer du travail qui n'est pas seulement bien designé, mais bien construit."
};

const locales = { en, fr };
export default locales;
