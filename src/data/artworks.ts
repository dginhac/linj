export type Language = 'fr' | 'en' | 'es';

export interface Artwork {
  id: string;
  name: string;
  artist: string;
  year: string;
  imageUrl: string;
  descriptions: Record<Language, string>;
  audioText: Record<Language, string>;
  color: string;
}

export const artworks: Artwork[] = [
  {
    id: 'victoire',
    name: 'Victoire de Samothrace',
    artist: 'Anonyme',
    year: '190 av. J.-C.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Nike_of_Samothrake_Louvre_Ma2369_n4.jpg/600px-Nike_of_Samothrake_Louvre_Ma2369_n4.jpg',
    color: '#4A90D9',
    descriptions: {
      fr: 'Chef-d\'œuvre de la sculpture grecque, découvert en 1863 sur l\'île de Samothrace. La déesse Niké, symbole de victoire, semble surgir d\'un navire de guerre.',
      en: 'A masterpiece of Greek sculpture, discovered in 1863 on the island of Samothrace. The goddess Nike, symbol of victory, appears to emerge from a warship.',
      es: 'Una obra maestra de la escultura griega, descubierta en 1863 en la isla de Samotracia. La diosa Nike, símbolo de la victoria, parece surgir de un barco de guerra.',
    },
    audioText: {
      fr: 'Bienvenue devant la Victoire de Samothrace. Cette sculpture magistrale datant de 190 avant Jésus-Christ représente Nike, la déesse grecque de la victoire. Découverte en 1863 sur l\'île de Samothrace, elle est aujourd\'hui l\'un des joyaux du musée du Louvre. Ses ailes déployées et ses drapés de marbre évoquent le souffle du vent et l\'élan triomphal.',
      en: 'Welcome to the Winged Victory of Samothrace. This magnificent sculpture dating from 190 BC represents Nike, the Greek goddess of victory. Discovered in 1863 on the island of Samothrace, it is today one of the jewels of the Louvre museum. Its spread wings and marble drapery evoke the breath of the wind and the triumphant momentum.',
      es: 'Bienvenido a la Victoria de Samotracia. Esta magnífica escultura que data del 190 antes de Cristo representa a Nike, la diosa griega de la victoria. Descubierta en 1863 en la isla de Samotracia, es hoy una de las joyas del museo del Louvre. Sus alas desplegadas y los pliegues de mármol evocan el soplo del viento y el impulso triunfal.',
    },
  },
  {
    id: 'penseur',
    name: 'Le Penseur',
    artist: 'Auguste Rodin',
    year: '1904',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Statue_of_The_Thinker%2C_Rodin.jpg/600px-Statue_of_The_Thinker%2C_Rodin.jpg',
    color: '#8B4513',
    descriptions: {
      fr: 'Icône mondiale de la sculpture, Le Penseur de Rodin représente un homme plongé dans une profonde réflexion. Initialement conçue pour La Porte de l\'Enfer en 1880.',
      en: 'A global icon of sculpture, Rodin\'s Thinker depicts a man in deep thought. Originally conceived for The Gates of Hell in 1880.',
      es: 'Icono mundial de la escultura, El Pensador de Rodin representa a un hombre sumido en profunda reflexión. Concebido originalmente para La Puerta del Infierno en 1880.',
    },
    audioText: {
      fr: 'Devant vous se dresse Le Penseur, l\'œuvre emblématique d\'Auguste Rodin. Créée en 1880, cette sculpture en bronze représente un homme nu assis, le menton posé sur le poing, plongé dans une méditation intense. Rodin l\'avait d\'abord intitulée "Le Poète" en référence à Dante Alighieri. La puissance de cette silhouette musclée contraste avec la vulnérabilité de la pensée humaine.',
      en: 'Before you stands The Thinker, the iconic work of Auguste Rodin. Created in 1880, this bronze sculpture depicts a nude man seated, chin resting on his fist, deep in intense meditation. Rodin had first titled it "The Poet" in reference to Dante Alighieri. The power of this muscular figure contrasts with the vulnerability of human thought.',
      es: 'Ante usted se alza El Pensador, la obra emblemática de Auguste Rodin. Creada en 1880, esta escultura de bronce representa a un hombre desnudo sentado, con el mentón apoyado en el puño, sumido en una intensa meditación. Rodin la había titulado primero "El Poeta" en referencia a Dante Alighieri. La potencia de esta silueta musculosa contrasta con la vulnerabilidad del pensamiento humano.',
    },
  },
  {
    id: 'balloon-dog',
    name: 'Balloon Dog (Blue)',
    artist: 'Jeff Koons',
    year: '1994–2000',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Jeff_Koons_Balloon_Dog.jpg/600px-Jeff_Koons_Balloon_Dog.jpg',
    color: '#0066CC',
    descriptions: {
      fr: 'Sculpture monumentale en acier inoxydable miroir représentant un chien gonflable bleu. Symbole de l\'art pop contemporain et de la culture consumériste américaine.',
      en: 'Monumental sculpture in mirror-polished stainless steel representing a blue inflatable dog. A symbol of contemporary pop art and American consumer culture.',
      es: 'Escultura monumental en acero inoxidable espejo que representa un perro inflable azul. Símbolo del arte pop contemporáneo y la cultura consumista estadounidense.',
    },
    audioText: {
      fr: 'Bienvenue devant le Balloon Dog bleu de Jeff Koons. Cette sculpture monumentale en acier inoxydable poli miroir reproduit fidèlement un ballon gonflable en forme de chien. Réalisée entre 1994 et 2000, elle fait partie d\'une série de cinq couleurs. Koons interroge la notion d\'art, de valeur et de kitsch en transformant un objet banal de fête d\'enfant en œuvre d\'art de plusieurs millions de dollars.',
      en: 'Welcome to Jeff Koons\' Blue Balloon Dog. This monumental sculpture in mirror-polished stainless steel faithfully reproduces an inflatable balloon dog. Created between 1994 and 2000, it is part of a series of five colors. Koons questions the notion of art, value and kitsch by transforming a banal children\'s party object into a multi-million dollar work of art.',
      es: 'Bienvenido al Balloon Dog azul de Jeff Koons. Esta escultura monumental en acero inoxidable pulido espejo reproduce fielmente un globo inflable en forma de perro. Realizada entre 1994 y 2000, forma parte de una serie de cinco colores. Koons cuestiona la noción de arte, valor y kitsch al transformar un objeto banal de fiesta infantil en una obra de arte de varios millones de dólares.',
    },
  },
  {
    id: 'ours-blanc',
    name: 'Ours blanc de Pompon',
    artist: 'François Pompon',
    year: '1922',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ours_blanc_de_pompon.jpg/600px-Ours_blanc_de_pompon.jpg',
    color: '#E8E8E8',
    descriptions: {
      fr: 'Sculpture emblématique de l\'art animalier français, cet ours polaire en marbre blanc incarne le dépouillement formel et l\'élégance épurée caractéristiques de Pompon.',
      en: 'An emblematic sculpture of French animal art, this white marble polar bear embodies the formal simplicity and refined elegance characteristic of Pompon.',
      es: 'Escultura emblemática del arte animalista francés, este oso polar de mármol blanco encarna la simplicidad formal y la elegancia refinada características de Pompon.',
    },
    audioText: {
      fr: 'Voici l\'Ours blanc de François Pompon, présenté pour la première fois au Salon d\'automne de 1922 à Paris. Cette sculpture en marbre blanc mesure plus d\'un mètre de hauteur et représente un ours polaire dans une posture dynamique, prêt à avancer. Pompon a consacré plus de dix ans à perfectionner cette œuvre. Sa surface lisse et ses formes épurées anticipent l\'art animalier moderne.',
      en: 'Here is the Polar Bear by François Pompon, first presented at the Salon d\'automne in 1922 in Paris. This white marble sculpture stands over a meter tall and depicts a polar bear in a dynamic posture, ready to advance. Pompon dedicated more than ten years to perfecting this work. Its smooth surface and clean forms anticipate modern animal art.',
      es: 'Este es el Oso Polar de François Pompon, presentado por primera vez en el Salón de Otoño de 1922 en París. Esta escultura de mármol blanco mide más de un metro de altura y representa un oso polar en una postura dinámica, listo para avanzar. Pompon dedicó más de diez años a perfeccionar esta obra. Su superficie lisa y sus formas depuradas anticipan el arte animalista moderno.',
    },
  },
  {
    id: 'louve',
    name: 'Louve Capitoline',
    artist: 'Anonyme',
    year: 'Ve siècle av. J.-C.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Lupa_Capitolina_Roma.jpg/600px-Lupa_Capitolina_Roma.jpg',
    color: '#8B6914',
    descriptions: {
      fr: 'Bronze étrusque représentant la louve qui allaita Romulus et Rémus, les fondateurs légendaires de Rome. Symbole éternel de la Ville Éternelle.',
      en: 'Etruscan bronze depicting the she-wolf who nursed Romulus and Remus, the legendary founders of Rome. An eternal symbol of the Eternal City.',
      es: 'Bronce etrusco que representa a la loba que amamantó a Rómulo y Remo, los legendarios fundadores de Roma. Símbolo eterno de la Ciudad Eterna.',
    },
    audioText: {
      fr: 'Devant vous se trouve la Louve Capitoline, l\'un des symboles les plus puissants de Rome. Cette sculpture en bronze représente la louve qui, selon la légende, allaita les jumeaux Romulus et Rémus, fondateurs de Rome. Longtemps attribuée aux Étrusques du Ve siècle avant Jésus-Christ, des analyses récentes suggèrent qu\'elle daterait du Moyen Âge. Les deux enfants, ajoutés au XVe siècle, achèvent ce mythe fondateur.',
      en: 'Before you is the Capitoline Wolf, one of the most powerful symbols of Rome. This bronze sculpture depicts the she-wolf who, according to legend, nursed the twins Romulus and Remus, founders of Rome. Long attributed to the Etruscans of the 5th century BC, recent analyses suggest it may date from the Middle Ages. The two children, added in the 15th century, complete this founding myth.',
      es: 'Ante usted se encuentra la Loba Capitolina, uno de los símbolos más poderosos de Roma. Esta escultura de bronce representa a la loba que, según la leyenda, amamantó a los gemelos Rómulo y Remo, fundadores de Roma. Durante mucho tiempo atribuida a los etruscos del siglo V antes de Cristo, análisis recientes sugieren que podría datar de la Edad Media. Los dos niños, añadidos en el siglo XV, completan este mito fundacional.',
    },
  },
  {
    id: 'nana',
    name: 'Bloom Nana Jaune',
    artist: 'Niki de Saint Phalle',
    year: '1999',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Nana_Niki_de_Saint_Phalle_Hanover_2.jpg/600px-Nana_Niki_de_Saint_Phalle_Hanover_2.jpg',
    color: '#FFD700',
    descriptions: {
      fr: 'Sculpture monumentale aux couleurs éclatantes, les Nanas de Niki de Saint Phalle célèbrent la féminité, la joie de vivre et la liberté à travers des formes généreuses et colorées.',
      en: 'Monumental sculpture in vibrant colors, Niki de Saint Phalle\'s Nanas celebrate femininity, joie de vivre and freedom through generous and colorful forms.',
      es: 'Escultura monumental en colores vibrantes, las Nanas de Niki de Saint Phalle celebran la feminidad, la alegría de vivir y la libertad a través de formas generosas y coloridas.',
    },
    audioText: {
      fr: 'Bienvenue devant la Nana jaune de Niki de Saint Phalle. Ces sculptures monumentales aux formes généreuses et aux couleurs éclatantes sont devenues l\'une des signatures de l\'artiste franco-américaine. Les Nanas célèbrent la féminité sous toutes ses formes, en rupture avec les canons traditionnels de beauté. Joyeuses, dansantes, triomphantes, elles incarnent la liberté et la joie de vivre chères à Niki de Saint Phalle.',
      en: 'Welcome to Niki de Saint Phalle\'s Yellow Nana. These monumental sculptures with generous forms and vibrant colors have become one of the signatures of the French-American artist. The Nanas celebrate femininity in all its forms, breaking with traditional beauty standards. Joyful, dancing, triumphant, they embody the freedom and joie de vivre dear to Niki de Saint Phalle.',
      es: 'Bienvenido a la Nana amarilla de Niki de Saint Phalle. Estas esculturas monumentales de formas generosas y colores vibrantes se han convertido en una de las señas de identidad de la artista franco-americana. Las Nanas celebran la feminidad en todas sus formas, rompiendo con los cánones tradicionales de belleza. Alegres, danzantes, triunfantes, encarnan la libertad y la alegría de vivir tan queridas por Niki de Saint Phalle.',
    },
  },
];
