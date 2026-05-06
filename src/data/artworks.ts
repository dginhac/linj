export type Language = "fr" | "en" | "es";

export interface Artwork {
  id: string;
  name: Record<Language, string>;
  artist: string;
  year: string;
  imageUrl: string;
  descriptions: Record<Language, string>;
  audioText: Record<Language, string>;
  color: string;
}

export const artworks: Artwork[] = [
  {
    id: "victoire",
    name: { fr: "Victoire de Samothrace", en: "Winged Victory of Samothrace", es: "Victoria de Samotracia" },
    artist: "Anonyme",
    year: "190 av. J.-C.",
    imageUrl:
      "https://medias.histoire-et-civilisations.com/api/v1/images/view/65f9a6895b635b19da0a18c9/width_1000/image.jpg",
    color: "#4A90D9",
    descriptions: {
      fr: "Chef-d'œuvre de la sculpture hellénistique, la Victoire de Samothrace représente Nike, déesse de la victoire. Sa draperie flottante et ses ailes déployées évoquent un mouvement saisissant. Découverte en 1863 dans l'île de Samothrace, elle est conservée au Louvre depuis 1884. Son dynamisme et sa puissance en font l'une des sculptures les plus admirées au monde.",
      en: "A masterpiece of Hellenistic sculpture, the Winged Victory of Samothrace depicts Nike, goddess of victory. Her flowing drapery and outstretched wings convey breathtaking movement. Discovered in 1863 on the island of Samothrace, she has been at the Louvre since 1884. Her dynamism and power make her one of the most admired sculptures in the world.",
      es: "Obra maestra de la escultura helenística, la Victoria de Samotracia representa a Nike, diosa de la victoria. Su drapería flotante y sus alas extendidas evocan un movimiento impresionante. Descubierta en 1863 en la isla de Samotracia, se conserva en el Louvre desde 1884.",
    },
    audioText: {
      fr: "Bienvenue devant la Victoire de Samothrace. Cette sculpture magistrale datant de 190 avant Jésus-Christ représente Nike, la déesse grecque de la victoire. Découverte en 1863 sur l'île de Samothrace, elle est aujourd'hui l'un des joyaux du musée du Louvre. Ses ailes déployées et ses drapés de marbre évoquent le souffle du vent et l'élan triomphal.",
      en: "Welcome to the Winged Victory of Samothrace. This magnificent sculpture dating from 190 BC represents Nike, the Greek goddess of victory. Discovered in 1863 on the island of Samothrace, it is today one of the jewels of the Louvre museum. Its spread wings and marble drapery evoke the breath of the wind and the triumphant momentum.",
      es: "Bienvenido a la Victoria de Samotracia. Esta magnífica escultura que data del 190 antes de Cristo representa a Nike, la diosa griega de la victoria. Descubierta en 1863 en la isla de Samotracia, es hoy una de las joyas del museo del Louvre. Sus alas desplegadas y los pliegues de mármol evocan el soplo del viento y el impulso triunfal.",
    },
  },
  {
    id: "penseur",
    name: { fr: "Le Penseur", en: "The Thinker", es: "El Pensador" },
    artist: "Auguste Rodin",
    year: "1904",
    imageUrl:
      "https://www.musee-rodin.fr/sites/default/files/styles/diaporama_mav/public/2021-04/jm_5550.jpg?itok=Qpk0zoXf",
    color: "#8B4513",
    descriptions: {
      fr: "Créé par Auguste Rodin entre 1880 et 1882, Le Penseur est l'une des sculptures les plus reconnaissables au monde. Initialement conçu comme représentation du poète Dante contemplant son œuvre, il est devenu le symbole universel de la réflexion philosophique. Sa posture concentrée et sa musculature puissante incarnent la profondeur de la pensée humaine.",
      en: "Created by Auguste Rodin between 1880 and 1882, The Thinker is one of the most recognizable sculptures in the world. Initially conceived as a representation of the poet Dante contemplating his work, it has become the universal symbol of philosophical reflection. Its concentrated posture and powerful musculature embody the depth of human thought.",
      es: "Creado por Auguste Rodin entre 1880 y 1882, El Pensador es una de las esculturas más reconocibles del mundo. Concebido inicialmente como representación del poeta Dante, se ha convertido en símbolo universal de la reflexión filosófica.",
    },
    audioText: {
      fr: "Devant vous se dresse Le Penseur, l'œuvre emblématique d'Auguste Rodin. Créée en 1880, cette sculpture en bronze représente un homme nu assis, le menton posé sur le poing, plongé dans une méditation intense. Rodin l'avait d'abord intitulée \"Le Poète\" en référence à Dante Alighieri. La puissance de cette silhouette musclée contraste avec la vulnérabilité de la pensée humaine.",
      en: 'Before you stands The Thinker, the iconic work of Auguste Rodin. Created in 1880, this bronze sculpture depicts a nude man seated, chin resting on his fist, deep in intense meditation. Rodin had first titled it "The Poet" in reference to Dante Alighieri. The power of this muscular figure contrasts with the vulnerability of human thought.',
      es: 'Ante usted se alza El Pensador, la obra emblemática de Auguste Rodin. Creada en 1880, esta escultura de bronce representa a un hombre desnudo sentado, con el mentón apoyado en el puño, sumido en una intensa meditación. Rodin la había titulado primero "El Poeta" en referencia a Dante Alighieri. La potencia de esta silueta musculosa contrasta con la vulnerabilidad del pensamiento humano.',
    },
  },
  {
    id: "balloon-dog",
    name: { fr: "Balloon Dog (Bleu)", en: "Balloon Dog (Blue)", es: "Balloon Dog (Azul)" },
    artist: "Jeff Koons",
    year: "1994–2000",
    imageUrl:
      "https://i2.wp.com/luxe.net/wp-content/uploads/2015/09/balloon-dog-blue.jpg",
    color: "#0066CC",
    descriptions: {
      fr: "Balloon Dog (Blue) est l'une des œuvres les plus emblématiques de Jeff Koons, artiste américain du Pop Art contemporain. Réalisée en acier inoxydable poli miroir, cette sculpture monumentale représente un chien fait de ballons gonflables. Elle interroge la frontière entre l'art et la culture populaire, entre l'innocence enfantine et la sophistication artistique.",
      en: "Balloon Dog (Blue) is one of the most iconic works by Jeff Koons, an American contemporary Pop Art artist. Made from mirror-polished stainless steel, this monumental sculpture depicts a dog made of inflatable balloons. It questions the boundary between art and popular culture, between childhood innocence and artistic sophistication.",
      es: "Balloon Dog (Blue) es una de las obras más emblemáticas de Jeff Koons, artista americano del Pop Art contemporáneo. Realizada en acero inoxidable pulido espejo, esta escultura monumental cuestiona la frontera entre el arte y la cultura popular.",
    },
    audioText: {
      fr: "Bienvenue devant le Balloon Dog bleu de Jeff Koons. Cette sculpture monumentale en acier inoxydable poli miroir reproduit fidèlement un ballon gonflable en forme de chien. Réalisée entre 1994 et 2000, elle fait partie d'une série de cinq couleurs. Koons interroge la notion d'art, de valeur et de kitsch en transformant un objet banal de fête d'enfant en œuvre d'art de plusieurs millions de dollars.",
      en: "Welcome to Jeff Koons' Blue Balloon Dog. This monumental sculpture in mirror-polished stainless steel faithfully reproduces an inflatable balloon dog. Created between 1994 and 2000, it is part of a series of five colors. Koons questions the notion of art, value and kitsch by transforming a banal children's party object into a multi-million dollar work of art.",
      es: "Bienvenido al Balloon Dog azul de Jeff Koons. Esta escultura monumental en acero inoxidable pulido espejo reproduce fielmente un globo inflable en forma de perro. Realizada entre 1994 y 2000, forma parte de una serie de cinco colores. Koons cuestiona la noción de arte, valor y kitsch al transformar un objeto banal de fiesta infantil en una obra de arte de varios millones de dólares.",
    },
  },
  {
    id: "ours-blanc",
    name: { fr: "Ours blanc de Pompon", en: "Polar Bear by Pompon", es: "Oso Polar de Pompon" },
    artist: "François Pompon",
    year: "1922",
    imageUrl:
      "https://cdn-s-www.bienpublic.com/images/ED5646F2-A697-4772-B46A-EBDE946E4660/NW_detail/apres-le-parc-darcy-et-le-musee-des-beaux-arts-l-ours-blanc-s-installera-aussi-sur-la-place-centrale-du-centre-commercial-toison-d-or-photo-lbp-stephane-rak-1682530441.jpg",
    color: "#E8E8E8",
    descriptions: {
      fr: "L'Ours blanc est l'œuvre maîtresse de François Pompon, sculpteur animalier français. Présenté au Salon d'Automne de 1922, cette sculpture stylisée révolutionne la représentation animale en éliminant tout détail superflu pour ne garder que l'essentiel. Ses formes épurées et sa surface lisse font de lui un précurseur de l'art moderne et du design contemporain.",
      en: "The Polar Bear is the masterpiece of François Pompon, a French animal sculptor. Presented at the Autumn Salon of 1922, this stylized sculpture revolutionized animal representation by eliminating all superfluous detail to keep only the essential. Its pure forms and smooth surface make it a precursor of modern art and contemporary design.",
      es: "El Oso Polar es la obra maestra de François Pompon, escultor animalista francés. Presentada en el Salón de Otoño de 1922, esta escultura estilizada revolucionó la representación animal eliminando todo detalle superfluo.",
    },
    audioText: {
      fr: "Voici l'Ours blanc de François Pompon, présenté pour la première fois au Salon d'automne de 1922 à Paris. Cette sculpture en marbre blanc mesure plus d'un mètre de hauteur et représente un ours polaire dans une posture dynamique, prêt à avancer. Pompon a consacré plus de dix ans à perfectionner cette œuvre. Sa surface lisse et ses formes épurées anticipent l'art animalier moderne.",
      en: "Here is the Polar Bear by François Pompon, first presented at the Salon d'automne in 1922 in Paris. This white marble sculpture stands over a meter tall and depicts a polar bear in a dynamic posture, ready to advance. Pompon dedicated more than ten years to perfecting this work. Its smooth surface and clean forms anticipate modern animal art.",
      es: "Este es el Oso Polar de François Pompon, presentado por primera vez en el Salón de Otoño de 1922 en París. Esta escultura de mármol blanco mide más de un metro de altura y representa un oso polar en una postura dinámica, listo para avanzar. Pompon dedicó más de diez años a perfeccionar esta obra. Su superficie lisa y sus formas depuradas anticipan el arte animalista moderno.",
    },
  },
  {
    id: "louve",
    name: { fr: "Louve Capitoline", en: "Capitoline Wolf", es: "Loba Capitolina" },
    artist: "Anonyme",
    year: "Ve siècle av. J.-C.",
    imageUrl:
      "https://www.euratlas.net/euratlas-info_protect/rome/capitole_louve.jpg",
    color: "#8B6914",
    descriptions: {
      fr: "La Louve Capitoline est une sculpture en bronze représentant une louve allaitant Romulus et Rémus, les fondateurs légendaires de Rome. Long considérée comme une œuvre étrusque datant du Ve siècle avant J.-C., des analyses récentes suggèrent qu'elle daterait du Moyen Âge. Elle est le symbole de Rome et l'une des sculptures les plus photographiées au monde.",
      en: "The Capitoline Wolf is a bronze sculpture depicting a she-wolf nursing Romulus and Remus, the legendary founders of Rome. Long considered an Etruscan work from the 5th century BC, recent analyses suggest it dates from the Middle Ages. It is the symbol of Rome and one of the most photographed sculptures in the world.",
      es: "La Loba Capitolina es una escultura de bronce que representa una loba amamantando a Rómulo y Remo, los fundadores legendarios de Roma. Símbolo de Roma y una de las esculturas más fotografiadas del mundo.",
    },
    audioText: {
      fr: "Devant vous se trouve la Louve Capitoline, l'un des symboles les plus puissants de Rome. Cette sculpture en bronze représente la louve qui, selon la légende, allaita les jumeaux Romulus et Rémus, fondateurs de Rome. Longtemps attribuée aux Étrusques du Ve siècle avant Jésus-Christ, des analyses récentes suggèrent qu'elle daterait du Moyen Âge. Les deux enfants, ajoutés au XVe siècle, achèvent ce mythe fondateur.",
      en: "Before you is the Capitoline Wolf, one of the most powerful symbols of Rome. This bronze sculpture depicts the she-wolf who, according to legend, nursed the twins Romulus and Remus, founders of Rome. Long attributed to the Etruscans of the 5th century BC, recent analyses suggest it may date from the Middle Ages. The two children, added in the 15th century, complete this founding myth.",
      es: "Ante usted se encuentra la Loba Capitolina, uno de los símbolos más poderosos de Roma. Esta escultura de bronce representa a la loba que, según la leyenda, amamantó a los gemelos Rómulo y Remo, fundadores de Roma. Durante mucho tiempo atribuida a los etruscos del siglo V antes de Cristo, análisis recientes sugieren que podría datar de la Edad Media. Los dos niños, añadidos en el siglo XV, completan este mito fundacional.",
    },
  },
  {
    id: "nana",
    name: { fr: "Nana Jaune", en: "Yellow Nana", es: "Nana Amarilla" },
    artist: "Niki de Saint Phalle",
    year: "1999",
    imageUrl:
      "https://media.lesechos.com/api/v1/images/view/5c9b06e0d286c2607f5aa773/1280x720-webp/060972446854-web-tete.webp",
    color: "#FFD700",
    descriptions: {
      fr: "Les Nanas sont une série de sculptures monumentales créées par Niki de Saint Phalle à partir de 1965. Ces figures féminines aux formes généreuses et aux couleurs éclatantes célèbrent la joie, la liberté et la féminité. La Nana Jaune, avec ses teintes lumineuses et sa posture dynamique, incarne l'énergie vitale et le mouvement perpétuel de l'art de Niki de Saint Phalle.",
      en: "The Nanas are a series of monumental sculptures created by Niki de Saint Phalle from 1965. These female figures with generous forms and vivid colors celebrate joy, freedom and femininity. The Yellow Nana, with its luminous hues and dynamic posture, embodies the vital energy and perpetual movement of Niki de Saint Phalle's art.",
      es: "Las Nanas son una serie de esculturas monumentales creadas por Niki de Saint Phalle desde 1965. Estas figuras femeninas de formas generosas y colores vivos celebran la alegría, la libertad y la feminidad.",
    },
    audioText: {
      fr: "Bienvenue devant la Nana jaune de Niki de Saint Phalle. Ces sculptures monumentales aux formes généreuses et aux couleurs éclatantes sont devenues l'une des signatures de l'artiste franco-américaine. Les Nanas célèbrent la féminité sous toutes ses formes, en rupture avec les canons traditionnels de beauté. Joyeuses, dansantes, triomphantes, elles incarnent la liberté et la joie de vivre chères à Niki de Saint Phalle.",
      en: "Welcome to Niki de Saint Phalle's Yellow Nana. These monumental sculptures with generous forms and vibrant colors have become one of the signatures of the French-American artist. The Nanas celebrate femininity in all its forms, breaking with traditional beauty standards. Joyful, dancing, triumphant, they embody the freedom and joie de vivre dear to Niki de Saint Phalle.",
      es: "Bienvenido a la Nana amarilla de Niki de Saint Phalle. Estas esculturas monumentales de formas generosas y colores vibrantes se han convertido en una de las señas de identidad de la artista franco-americana. Las Nanas celebran la feminidad en todas sus formas, rompiendo con los cánones tradicionales de belleza. Alegres, danzantes, triunfantes, encarnan la libertad y la alegría de vivir tan queridas por Niki de Saint Phalle.",
    },
  },
];
