const paintings = [
  {
    name: "Impression, sunrise",
    author: "Claude Monet",
    year: 1872,
    source: "./impression-sunrise.jpg",
    description: `
    When Impression, Sunrise hung at its first exhibition in 1874, art critic Louis Leroy derisively used the term “Impressionistic,” from the title of this painting, to describe Monet’s works. 
    This term was quickly adopted by what were soon to be known as the Impressionist painters, and the exhibition which included other works by Impressionist artists, was from then on referred to as the “Impressionist Exhibition.” 
    This painting was later stolen in 1985 from the Musee Marmottan Monet in Paris, but was recovered undamaged in 1990, and was put back on display at the museum in 1991.
    `,
    wikipediaLink: "https://en.wikipedia.org/wiki/Impression,_Sunrise",
  },
  {
    name: "Guernica",
    author: "Pablo Picasso",
    year: 1937,
    source: "./guernica-by-pablo-picasso.jpg",
    description: `
    Guernica was Picasso's response to the bombing of the Basque town of the same name on April 26, 1937 during the Spanish Civil War. Picasso was commissioned by the republican government of Spain to produce a mural painting for the Spanish Pavilion at the World Fair in Paris. Painted in one month - from May to June 1937 - Guernica became the centerpiece of the Spanish pavilion and a sensation at the Fair, but it was consequently banned from exhibition in Spain until military dictator Franco fell from power in 1975.
    Picasso had studied dramatic photographs of bombing published in various periodicals. Despite that, neither the studies nor the finished picture contain a single allusion to a specific event, constituting instead a generic plea against the barbarity and terror of war. The scene depicted in Guernica is a room full of moving, screaming and dying adults, children and animals.
    `,
    wikipediaLink: "https://en.wikipedia.org/wiki/Guernica_(Picasso)",
  },
  {
    name: "Nighthawks",
    author: "Edward Hopper",
    year: 1942,
    source: "./nighthawks_by_edward_hopper_1942.jpg",
    description: `
    Edward Hopper said that Nighthawks was inspired by "a restaurant on New York's Greenwich Avenue where two streets meet," but the image, with its carefully constructed composition and lack of narrative, has a timeless quality that transcends its particular locale. One of the best-known images of 20th-century art, the painting depicts an all-night diner in which three customers, all lost in their own thoughts, have congregated. Fluorescent lights had just come into use in the early 1940s, and the all-night diner emits an eerie glow, like a beacon on the dark street corner. Hopper eliminated any reference to an entrance, and the viewer, drawn to the light, is shut out from the scene by a seamless wedge of glass. The four anonymous and uncommunicative night owls seem as separate and remote from the viewer as they are from one another. Reworked and parodied countless times, Nighthawks has become an icon of American culture.
    `,
    wikipediaLink: "https://en.wikipedia.org/wiki/Nighthawks",
  },
  {
    name: "The Great Wave off Kanagawa",
    author: "Katsushika Hokusai",
    year: 1831,
    source: "./the-great-wave-off-kanagawa.jpg",
    description: `
    The Great Wave off Kanagawa (神奈川沖浪裏, Kanagawa-oki nami ura, "Under a wave off Kanagawa"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai's series Thirty-six Views of Mount Fuji. It is Hokusai's most famous work, and one of the most recognizable works of Japanese art in the world.
    The image depicts an enormous wave threatening boats off the coast of the town of Kanagawa (the present-day city of Yokohama, Kanagawa Prefecture). While sometimes assumed to be a tsunami, the wave is more likely to be a large rogue wave. As in many of the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background.
    `,
    wikipediaLink: "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa",
  },
  {
    name: "The Kiss",
    author: "Gustav Klimt",
    year: 1908,
    source: "./the-kiss-1908.jpg",
    description: `
    The Kiss is probably Gustav Klimt’s most famous work. It is also the high point of the artist’s Gold Period, which was characterized by his use of gold leaf in his work. This painting is one in which Klimt deviated from his portrayal of dominant in women in the form of a femme fatale. Instead is the portrayal of love and art, a couple locked in a golden-flecked, flower-filled embrace. Klimt was a man with an unbridled sexual appetite, as he fathered at least 14 illegitimate children. It is rumored that Klimt and his longtime companion, Emile Floge, who was also said to be his lover, were the models of the painting, which was selected to be printed on the Austrian 100 euro coin, minted in 2003.
    `,
    wikipediaLink: "https://en.wikipedia.org/wiki/The_Kiss_(Klimt)",
  },
  {
    name: "Abaporu",
    author: "Tarsila do Amaral",
    year: 1928,
    source: "./abaporu.jpg",
    description: `
    Abaporu (from Tupi language "abapor’u", abá (man) + poro (people) + ’u (to eat), lit. 'the man that eats people') is an oil painting on canvas by Brazilian painter Tarsila do Amaral. It was painted as a birthday gift to writer Oswald de Andrade, who was her husband at the time.
    It is considered the most valuable painting by a Brazilian artist, having reached the value of $1.4 million, paid by Argentine collector Eduardo Costantini in an auction in 1995. It is currently displayed at the Latin American Art Museum of Buenos Aires (Spanish: Museo de Arte Latinoamericano de Buenos Aires, MALBA) in Buenos Aires, Argentina.
    The composition: one man, the sun and a cactus – inspired Oswald de Andrade to write the Manifesto Antropófago and consequently create the Anthropophagic Movement, intended to "swallow" foreign culture and turn it into something culturally Brazilian.`,
    wikipediaLink: "https://en.wikipedia.org/wiki/Abaporu",
  },
  {
    name: "The Last Supper",
    author: "Leonardo da Vinci",
    year: 1495,
    source: "./the-last-supper-restored-da-vinci.jpg",
    description: `
    The Last Supper (Italian: Il Cenacolo [il tʃeˈnaːkolo] or L'Ultima Cena [ˈlultima ˈtʃeːna]) is a late 15th-century mural painting by Italian artist Leonardo da Vinci housed by the refectory of the Convent of Santa Maria delle Grazie in Milan, Italy. It is one of the world's most recognizable paintings.
    The work is presumed to have been started around 1495–96 and was commissioned as part of a plan of renovations to the church and its convent buildings by Leonardo's patron Ludovico Sforza, Duke of Milan. The painting represents the scene of the Last Supper of Jesus with his apostles, as it is told in the Gospel of John, 13:21. Leonardo has depicted the consternation that occurred among the Twelve Disciples when Jesus announced that one of them would betray him.
    `,
    wikipediaLink:
      "https://en.wikipedia.org/wiki/The_Last_Supper_(Leonardo_da_Vinci)",
  },
  {
    name: "The Persistence of Memory",
    author: "Salvador Dali",
    year: 1931,
    source: "./the-persistence-of-memory-1931.jpg",
    description: `
    The Persistence of Memory (Spanish: La persistencia de la memoria) is a 1931 painting by artist Salvador Dalí, and one of his most recognizable works. First shown at the Julien Levy Gallery in 1932, since 1934 the painting has been in the collection of the Museum of Modern Art (MoMA) in New York City, which received it from an anonymous donor. It is widely recognized and frequently referenced in popular culture, and sometimes referred to by more descriptive (though incorrect) titles, such as "Melting Clocks", "The Soft Watches" or "The Melting Watches".
    `,
    wikipediaLink: "https://en.wikipedia.org/wiki/The_Persistence_of_Memory",
  },
  {
    name: "The Scream",
    author: "Edvard Munch",
    year: 1893,
    source: "./the-scream-1893.jpg",
    description: `
    The Scream is the best known and most frequently reproduced of all Munch’s motifs. With its expressive colours, its flowing lines and striking overall effect, its appeal is universal.
    Despite radical simplification, the landscape in the picture is recognisable as the Kristiania Fjord seen from Ekeberg, with a broad view over the fjord, the town and the hills beyond. In the background to the left, at the end of the path with the balustrade that cuts diagonally across the picture, we see two strolling figures, often regarded as two friends whom Munch mentions in notes relating to the picture. But the figure in the foreground is the first to capture the viewer’s attention. Its hands are held to its head and its mouth is wide open in a silent scream, which is amplified by the undulating movement running through the surrounding landscape.
    `,
    wikipediaLink: "https://en.wikipedia.org/wiki/The_Scream",
  },
  {
    name: "The Starry Night",
    author: "Vincent van Gogh",
    year: 1889,
    source: "./the-starry-night.jpg",
    description: `
    The Starry Night is an oil on canvas by the Dutch post-impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an idealized village.
    The Starry Night is regarded as among Van Gogh's finest works, and is one of the most recognized paintings in the history of Western culture. It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through the Lillie P. Bliss Bequest.
    `,
    wikipediaLink: "https://en.wikipedia.org/wiki/The_Starry_Night",
  },
  {
    name: "Dance at Moulin de la Galette",
    author: "Pierre-Auguste Renoir",
    year: 1876,
    source: "./ball-at-the-moulin-de-la-galette-1876.jpg",
    description: `
    Dance at Moulin de la Galette is one of Impressionism’s most highly revered masterpieces. The scene is of a Sunday afternoon at Moulin de la Galette, where Parisians would typically dress up and spend all day dancing, drinking, and eating galettes, or flat cakes. The painting was in the collection of Gustave Caillebotte, but it was claimed by the French government upon his death due to the non payment of death duties. It was later transferred from the Luxembourg Museum, to the Louvre, and then later to the Musee d’Orsay. Its sale price at auction in 2009 was the fifth highest price ever paid for a painting at auction.`,
    wikipediaLink: "https://en.wikipedia.org/wiki/Bal_du_moulin_de_la_Galette",
  },
  {
    name: "Boulevard Montmartre Afternoon Sunlight",
    author: "Camille Pissarro",
    year: 1897,
    source: "./boulevard-montmartre-afternoon-sunlight-1897.jpg",
    description: `
    Le Boulevard de Montmartre, Matinée de Printemps is an 1897 oil on canvas painting of Paris' Boulevard Montmartre by the French artist Camille Pissarro.
    By 1923 it was in the collection of the German industrialist and Holocaust victim Max Silberberg (de). Silberberg was obliged by the ruling Nazi regime to dispose of the work in a forced sale in 1935. It was restituted to his family in 2000 and placed on loan with the Israel Museum until 2013. On 5 February 2014 it was auctioned at Sotheby's, London, for £19,682,500, double its pre-sale estimate.`,
    wikipediaLink: "https://en.wikipedia.org/wiki/Camille_Pissarro",
  },
];

const answerOptions = paintings.concat([
  { name: "Mona Lisa", author: "Leonardo da Vinci" },
  { name: "Summer", author: "Francisco Goya" },
  { name: "The Two Fridas", author: "Frida Kahlo" },
  { name: "The lovers", author: "Rene Magritte" },
  { name: "Portrait of Adele Bloch-Bauer I", author: "Gustav Klimt" },
  { name: "Dance", author: "Henri Matisse" },
  { name: "Forever Always", author: "Octavio Ocampo" },
  { name: "The Birth of Venus", author: "Sandro Botticelli" },
  { name: "Portrait of Dora Maar", author: "Pablo Picasso" },
  { name: "The Luncheon on the Grass", author: "Edouard Manet" },
]); // extra options for paintings names and authors