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
    intro: "This portfolio shows the work. This page is about the person who made it. No résumé, just the story.",
    content_1: "I'm a Québécois, born in Montreal in the 90s. I grew up in a neighbourhood that was still being built, which meant open fields, half-finished treehouses that got torn down to make room for new houses, and bikes everywhere. I spent most of that time making things and taking them apart. It took me a while to notice that never really stopped.",
    content_2: "I picked up a guitar around 12 and kept it close for about ten years. My teenage soundtrack ran from Billy Talent and Green Day through Disturbed and Avenged Sevenfold, and then Skrillex arrived and the whole dubstep wave came with him.",
    content_3: "Baseball took every summer, around 22 games a season between league play and tournaments. At 18, our team finished third at the Quebec provincial championships.",
    content_4: "Then video games took over. Endless Minecraft worlds, semi-competitive Counter-Strike, far too many hours in APB Reloaded, Conquer Online, Skyrim, No Man's Sky, Stardew Valley. Naming a game I haven't tried is harder than it sounds.",
    content_5: "After high school I studied Computer Systems at Cégep de Maisonneuve, a program that sits right between hardware and software. One week I was writing embedded code for microcontrollers, the next I was building web interfaces. I didn't know it at the time, but that combination became the whole shape of my career. I've never been comfortable staying on one side of a problem.",
    content_6: "Then three years of Software Engineering at ÉTS: architecture, networking, design patterns, and all the math an engineering degree comes with. I got 104 of 143 credits and three industry internships in before the pandemic hit, and I decided not to finish. I was already freelancing, and the real mandates were teaching me faster than school was. It's the decision people ask me about most, and I'd make it again.",
    content_7: "That's what led me to Fanslab, a virtual events platform launched at the exact moment every conference in the world went digital. I led a team of five developers there, ran the hiring, and we shipped the core of the platform in four weeks. It ran C2 Montréal. The company didn't survive, but I learned more in those two years than in any classroom.",
    content_8: "Then three years at Pinax, on the product side of large-scale data infrastructure. I designed and built the website and the app, set the OKRs, and scoped the API work with the backend team. It was the first place I was responsible for what got built, not just how it looked. It was also deep in the blockchain world, and after three years I decided that wasn't where I wanted to keep building. Along the way I co-founded Oreus, making tools for mortgage brokers, and joined Monark early, where I built the internal platform and supervised eight student project teams from uOttawa, Polytechnique Montréal, UQO and UQAC.",
    content_9: "Today I'm Principal UX Designer at Cactusoft, leading the redesign and rebrand of a construction management platform used across Québec. Dense operational screens, real accessibility and regulatory constraints, and a product that has to keep shipping while it's being rebuilt. It's the hardest design problem I've worked on and easily my favourite. What I'm chasing is still that overlap between design and engineering: understanding both sides means I can make the call and then be accountable for it, instead of handing it off and hoping. Outside of that, still the guitar, still the games, and a slowly growing pile of half-finished electronics projects.",
};

const fr: I18n = {
    hi_1: "Bonjour,",
    hi_2: "je suis Dominic.",
    intro: "Ce portfolio montre le travail. Cette page parle de la personne derrière. Pas de CV, juste l'histoire.",
    content_1: "Je suis Québécois, né à Montréal dans les années 90. J'ai grandi dans un quartier encore en construction, ce qui voulait dire des champs à perte de vue, des cabanes dans les arbres à moitié finies démolies pour faire place aux nouvelles maisons, et du vélo partout. J'ai passé l'essentiel de ce temps à fabriquer des choses et à les démonter. J'ai mis du temps à réaliser que ça ne s'était jamais vraiment arrêté.",
    content_2: "J'ai commencé la guitare vers 12 ans et je l'ai gardée près de moi une dizaine d'années. La bande sonore de mon adolescence allait de Billy Talent et Green Day à Disturbed et Avenged Sevenfold, puis Skrillex est arrivé avec toute la vague dubstep.",
    content_3: "Le baseball prenait tous mes étés, environ 22 matchs par saison entre la ligue et les tournois. À 18 ans, notre équipe a terminé troisième au championnat provincial du Québec.",
    content_4: "Puis les jeux vidéo ont pris le dessus. Des mondes entiers dans Minecraft, du Counter-Strike semi-compétitif, beaucoup trop d'heures sur APB Reloaded, Conquer Online, Skyrim, No Man's Sky, Stardew Valley. Nommer un jeu que je n'ai pas essayé est plus difficile qu'il n'y paraît.",
    content_5: "Après le secondaire, j'ai étudié en Systèmes ordinés au Cégep de Maisonneuve, un programme situé exactement entre le matériel et le logiciel. Une semaine j'écrivais du code embarqué pour des microcontrôleurs, la suivante je construisais des interfaces web. Je ne le savais pas encore, mais cette combinaison est devenue la forme même de ma carrière. Je n'ai jamais été à l'aise de rester d'un seul côté d'un problème.",
    content_6: "Ensuite, trois ans en Génie logiciel à l'ÉTS : architecture, réseaux, patrons de conception, et toutes les mathématiques qui viennent avec un programme d'ingénierie. J'avais 104 crédits sur 143 et trois stages en industrie derrière moi quand la pandémie est arrivée, et j'ai décidé de ne pas terminer. Je travaillais déjà à mon compte, et les vrais mandats m'apprenaient plus vite que les cours. C'est la décision sur laquelle on me questionne le plus, et je la reprendrais.",
    content_7: "C'est ce qui m'a mené chez Fanslab, une plateforme d'événements virtuels lancée au moment précis où toutes les conférences du monde passaient au numérique. J'y ai dirigé une équipe de cinq développeurs, piloté l'embauche, et nous avons livré le cœur de la plateforme en quatre semaines. Elle a fait rouler C2 Montréal. L'entreprise n'a pas survécu, mais j'ai appris plus en deux ans là qu'en n'importe quelle salle de cours.",
    content_8: "Puis trois ans chez Pinax, du côté produit d'une infrastructure de données à grande échelle. J'ai conçu et développé le site et l'application, défini les OKR, et cadré le travail d'API avec l'équipe backend. C'est le premier endroit où j'étais responsable de ce qui se construisait, pas seulement de son apparence. C'était aussi profondément ancré dans le monde de la blockchain, et après trois ans j'ai décidé que ce n'était pas là que je voulais continuer à bâtir. En parallèle, j'ai cofondé Oreus, des outils pour courtiers hypothécaires, et je me suis joint tôt à Monark, où j'ai livré la plateforme applicative interne et encadré huit équipes projet étudiantes de l'uOttawa, de Polytechnique Montréal, de l'UQO et de l'UQAC.",
    content_9: "Aujourd'hui, je suis Designer UX Principal chez Cactusoft, où je pilote la refonte et le rebranding d'une plateforme de gestion de chantiers utilisée partout au Québec. Des écrans opérationnels denses, de vraies contraintes d'accessibilité et de réglementation, et un produit qui doit continuer à livrer pendant qu'on le reconstruit. C'est le problème de design le plus difficile sur lequel j'ai travaillé, et de loin mon préféré. Ce que je cherche, c'est toujours cette intersection entre le design et l'ingénierie : comprendre les deux côtés me permet de trancher, puis d'en être responsable, plutôt que de passer le dossier en espérant. À côté de ça, toujours la guitare, toujours les jeux, et une pile qui grandit lentement de projets d'électronique à moitié terminés.",
};

const locales = { en, fr };
export default locales;
