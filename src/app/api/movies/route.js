import { NextResponse } from 'next/server';

export async function GET() {
  const movies = [
  {
    id: 1,
    title: "About Time",
    spanishTitle: "CUESTIÓN DE TIEMPO",
    year: 2013,
    director: "Richard Curtis",
    actors: ["Domhnall Gleeson", "Rachel McAdams", "Bill Nighy"],
    synopsis:
      "A la edad de 21 años, Tim Lake descubre que puede viajar en el tiempo. Su padre le revela que los hombres de su familia siempre han tenido esta habilidad.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/ls6zswrOZVhCXQBh96DlbnLBajM.jpg",
  },
  {
    id: 2,
    title: "Avengers: Endgame",
    spanishTitle: "VENGADORES: FIN DEL JUEGO",
    year: 2019,
    director: "Anthony & Joe Russo",
    actors: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth"],
    synopsis:
      "Tras los eventos devastadores de Infinity War, los Vengadores restantes deben reunirse para deshacer las acciones de Thanos mediante un atraco al tiempo.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06vS3nBvWbiSsp91G36lzG9Vd.https://www.themoviedb.org/t/p/w600_and_h900_face/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
  },
  {
    id: 3,
    title: "Avengers: Infinity War",
    spanishTitle: "VENGADORES: GUERRA DEL INFINITO",
    year: 2018,
    director: "Anthony & Joe Russo",
    actors: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth"],
    synopsis:
      "Thanos intenta reunir las 6 Gemas del Infinito para eliminar a la mitad del universo. Los Vengadores se unen en una lucha desesperada a través del cosmos para detenerlo.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  },
  {
    id: 4,
    title: "Back to the Future",
    spanishTitle: "VOLVER AL FUTURO",
    year: 1985,
    director: "Robert Zemeckis",
    actors: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
    synopsis:
      "Marty McFly viaja accidentalmente a 1955 en un DeLorean y debe asegurar que sus padres se enamoren para no dejar de existir.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg",
  },
  {
    id: 5,
    title: "Back to the Future - Part II",
    spanishTitle: "VOLVER AL FUTURO II",
    year: 1989,
    director: "Robert Zemeckis",
    actors: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
    synopsis:
      "Tras visitar el año 2015, Marty debe regresar a 1955 para evitar cambios desastrosos en la línea de tiempo original.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/YBawEsTkUZBDajKbd5LiHkmMGf.jpg",
  },
  {
    id: 6,
    title: "Back to the Future - Part III",
    spanishTitle: "VOLVER AL FUTURO III",
    year: 1990,
    director: "Robert Zemeckis",
    actors: ["Michael J. Fox", "Christopher Lloyd", "Mary Steenburgen"],
    synopsis:
      "Marty McFly viaja al Lejano Oeste de 1885 para rescatar a Doc Brown de una muerte prematura a manos de un forajido.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/crzoVQnMzIrRfHtQw0tLBirNfVg.jpg7W.jpg",
  },
  {
    id: 7,
    title: "Boss Level",
    spanishTitle: "UN DÍA MÁS PARA MORIR",
    year: 2020,
    director: "Joe Carnahan",
    actors: ["Frank Grillo", "Mel Gibson", "Naomi Watts"],
    synopsis:
      "Un oficial de fuerzas especiales retirado queda atrapado en un bucle temporal infinito que termina siempre con su muerte.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/nt8on8Ge0Lsw0oF6EbmGiDV69Hf.jpg",
  },
  {
    id: 8,
    title: "Déjà Vu",
    spanishTitle: "DÉJÀ VU",
    year: 2006,
    director: "Tony Scott",
    actors: ["Denzel Washington", "Paula Patton", "Val Kilmer", "Jim Caviezel"],
    synopsis:
      "Un agente de la ATF utiliza una tecnología experimental de vigilancia temporal para intentar prevenir un ataque terrorista.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/eTX6hklzFOiEVqVukNCEedZKhix.jpg",
  },
  {
    id: 9,
    title: "Deadpool 2",
    spanishTitle: "DEADPOOL 2",
    year: 2018,
    director: "David Leitch",
    actors: ["Ryan Reynolds", "Josh Brolin", "Morena Baccarin"],
    synopsis:
      "Deadpool organiza un equipo de mutantes para proteger a un joven de Cable, un soldado que viaja en el tiempo desde el futuro.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
  },
  {
    id: 10,
    title: "Doctor Strange",
    spanishTitle: "DOCTOR STRANGE: HECHICERO SUPREMO",
    year: 2016,
    director: "Scott Derrickson",
    actors: ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams"],
    synopsis:
      "Un neurocirujano brillante descubre el mundo de las artes místicas y aprende a manipular el tiempo para salvar la realidad.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/xf8PbyQcR5ucXErmZNzdKR0s8ya.jpg",
  },
  {
    id: 11,
    title: "Edge of Tomorrow",
    spanishTitle: "AL FILO DEL MAÑANA",
    year: 2014,
    director: "Doug Liman",
    actors: ["Tom Cruise", "Emily Blunt", "Bill Paxton", "Brendan Gleeson"],
    synopsis:
      "Un soldado que lucha contra alienígenas queda atrapado en un bucle temporal, reviviendo el mismo día de combate cada vez que muere.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/nBM9MMa2WCwvMG4IJ3eiGUdbPe6.jpg",
  },
  {
    id: 12,
    title: "Frequency",
    spanishTitle: "FRECUENCIA / DESAFÍO AL TIEMPO",
    year: 2000,
    director: "Gregory Hoblit",
    actors: ["Dennis Quaid", "James Caviezel", "Andre Braugher"],
    synopsis:
      "Un hijo logra comunicarse con su padre fallecido 30 años atrás a través de una radio antigua, alterando el pasado y el presente.",
    image:
      "https://movieburnerentertainment.org/wp-content/uploads/2018/04/frequency.png?w=674",
  },
  {
    id: 13,
    title: "Groundhog Day",
    spanishTitle: "EL DÍA DE LA MARMOTA / HECHIZO DEL TIEMPO",
    year: 1993,
    director: "Harold Ramis",
    actors: ["Bill Murray", "Andie MacDowell", "Chris Elliott"],
    synopsis:
      "Un meteorólogo arrogante queda atrapado reviviendo el mismo día una y otra vez en un pequeño pueblo de Pensilvania.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/gCgt1WARPZaXnq523ySQEUKinCs.jpg",
  },
  {
    id: 14,
    title: "Happy Death Day",
    spanishTitle: "FELIZ DÍA DE TU MUERTE",
    year: 2017,
    director: "Christopher Landon",
    actors: ["Jessica Rothe", "Israel Broussard", "Ruby Modine"],
    synopsis:
      "Una estudiante universitaria debe revivir el día de su asesinato una y otra vez hasta descubrir la identidad de su asesino.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/cTaEIUYTt52ooq9quVbAQ7NpGwo.jpg",
  },
  {
    id: 15,
    title: "Harry Potter and the Prisoner of Azkaban",
    spanishTitle: "HARRY POTTER Y EL PRISIONERO DE AZKABAN",
    year: 2004,
    director: "Alfonso Cuarón",
    actors: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Gary Oldman"],
    synopsis:
      "Harry usa un Giratiempo para retroceder unas horas y salvar dos vidas inocentes de un destino trágico.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
  },
  {
    id: 16,
    title: "Interstellar",
    spanishTitle: "INTERESTELAR",
    year: 2014,
    director: "Christopher Nolan",
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    synopsis:
      "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio para asegurar la supervivencia de la humanidad ante la dilatación temporal.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 17,
    title: "Jumanji",
    spanishTitle: "JUMANJI",
    year: 1995,
    director: "Joe Johnston",
    actors: ["Robin Williams", "Kirsten Dunst", "Bonnie Hunt"],
    synopsis:
      "Un niño queda atrapado en un juego de mesa mágico durante 26 años hasta que otros niños lo liberan al reanudar la partida.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg",
  },
  {
    id: 18,
    title: "Kate & Leopold",
    spanishTitle: "KATE Y LEOPOLD",
    year: 2001,
    director: "James Mangold",
    actors: ["Meg Ryan", "Hugh Jackman", "Liev Schreiber", "Breckin Meyer"],
    synopsis:
      "Un duque del siglo XIX viaja a través de una grieta en el tiempo hasta el Nueva York moderno, donde se enamora de una ejecutiva.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/57kLEPlIXHynZXTjJF6Jyk3ZmKT.jpg",
  },
  {
    id: 19,
    title: "Looper",
    spanishTitle: "ASESINOS DEL FUTURO",
    year: 2012,
    director: "Rian Johnson",
    actors: ["Joseph Gordon-Levitt", "Bruce Willis", "Emily Blunt"],
    synopsis:
      "En 2074, cuando la mafia quiere deshacerse de alguien, lo envían al pasado donde un asesino a sueldo, un looper, los espera.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/sNjL6SqErDBE8OUZlrDLkexfsCj.jpg",
  },
  {
    id: 20,
    title: "Men in Black 3",
    spanishTitle: "HOMBRES DE NEGRO 3",
    year: 2012,
    director: "Barry Sonnenfeld",
    actors: ["Will Smith", "Tommy Lee Jones", "Josh Brolin"],
    synopsis:
      "El Agente J debe viajar al pasado, concretamente a 1969, para salvar la vida de su compañero K y el futuro del planeta.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/90DdoEStzeObs96fsYf4GG544iN.jpg",
  },
  {
    id: 21,
    title: "Naked",
    spanishTitle: "DESNUDO",
    year: 2017,
    director: "Michael Tiddes",
    actors: ["Marlon Wayans", "Regina Hall", "Dennis Haysbert"],
    synopsis:
      "Un hombre queda atrapado en un bucle temporal el día de su boda, despertando desnudo en un ascensor una y otra vez.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/qXRmYSB9C6SHdxTgY3wB72Riz9Y.jpg",
  },
  {
    id: 22,
    title: "Next",
    spanishTitle: "EL VIDENTE",
    year: 2007,
    director: "Lee Tamahori",
    actors: ["Nicolas Cage", "Julianne Moore", "Jessica Biel"],
    synopsis:
      "Un mago de Las Vegas que puede ver el futuro cercano es perseguido por el FBI para ayudar a prevenir un ataque terrorista.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/wtBOCJBCP0MWNjmBwjMAzbwgtTK.jpg",
  },
  {
    id: 23,
    title: "Planet of the Apes",
    spanishTitle: "EL PLANETA DE LOS SIMIOS",
    year: 1968,
    director: "Franklin J. Schaffner",
    actors: ["Charlton Heston", "Roddy McDowall", "Kim Hunter"],
    synopsis:
      "Un astronauta aterriza en un planeta lejano donde simios inteligentes son la especie dominante y los humanos son esclavos.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/2r9iKnlSYEk4daQadsXfcjHfIjQ.jpg",
  },
  {
    id: 24,
    title: "Prince of Persia: The Sands of Time",
    spanishTitle: "EL PRÍNCIPE DE PERSIA: LAS ARENAS DEL TIEMPO",
    year: 2010,
    director: "Mike Newell",
    actors: ["Jake Gyllenhaal", "Gemma Arterton", "Ben Kingsley"],
    synopsis:
      "Un príncipe aventurero se une a una princesa rival para proteger una daga mágica que permite retroceder el tiempo.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/siNGMLdOUNYLEGtlsnmQcpO2XZX.jpg",
  },
  {
    id: 25,
    title: "Project Almanac",
    spanishTitle: "PROYECTO ALMANAQUE / BIENVENIDOS AL AYER",
    year: 2015,
    director: "Dean Israelite",
    actors: ["Jonny Weston", "Sofia Black-D'Elia", "Sam Lerner"],
    synopsis:
      "Un grupo de adolescentes construye una máquina del tiempo y comienzan a usarla para su propio beneficio, con consecuencias desastrosas.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/9u5Rb0e7mx8qOO7zj39KnIRWClr.jpg",
  },
  {
    id: 26,
    title: "Sphere",
    spanishTitle: "LA ESFERA",
    year: 1987,
    director: "Barry Levinson",
    actors: ["Dustin Hoffman", "Sharon Stone", "Samuel L. Jackson"],
    synopsis:
      "Un grupo de científicos descubre una nave espacial en el fondo del océano que parece provenir del futuro.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/reR7C7EYe3DiHm5OYpA0ACUMDld.jpg",
  },
  {
    id: 27,
    title: "Superman",
    spanishTitle: "SUPERMAN: LA PELÍCULA",
    year: 1978,
    director: "Richard Donner",
    actors: ["Marlon Brando", "Gene Hackman", "Christopher Reeve"],
    synopsis:
      "Un alienígena con superpoderes llega a la Tierra para proteger a la humanidad. Bajo el nombre de Superman, debe detener los planes del villano Lex Luthor.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/d7px1FQxW4tngdACVRsCSaZq0Xl.jpg",
  },
  {
    id: 28,
    title: "Terminator 2: Judgment Day",
    spanishTitle: "TERMINATOR 2: EL JUICIO FINAL",
    year: 1991,
    director: "James Cameron",
    actors: ["Arnold Schwarzenegger", "Linda Hamilton", "Edward Furlong"],
    synopsis:
      "Un cyborg reprogramado es enviado al pasado para proteger al joven John Connor de un prototipo de metal líquido más avanzado.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/jFTVD4XoWQTcg7wdyJKa8PEds5q.jpg",
  },
  {
    id: 29,
    title: "The Butterfly Effect",
    spanishTitle: "EL EFECTO MARIPOSA",
    year: 2004,
    director: "Eric Bress",
    actors: ["Ashton Kutcher", "Amy Smart", "Melora Walters"],
    synopsis:
      "Un joven descubre que puede viajar al pasado a través de sus diarios, pero cada pequeño cambio tiene efectos impredecibles.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/ea5iv7TWMh18fOKoRGgmtcg85Gx.jpg",
  },
  {
    id: 30,
    title: "The Lake House",
    spanishTitle: "LA CASA DEL LAGO",
    year: 2006,
    director: "Alejandro Agresti",
    actors: ["Keanu Reeves", "Sandra Bullock", "Christopher Plummer"],
    synopsis:
      "Un arquitecto y una doctora se enamoran enviándose cartas a través de un buzón que conecta el año 2004 con el 2006.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/tHpc1118dYWLnHZleGhwZxRbpae.jpg",
  },
  {
    id: 31,
    title: "The Terminator",
    spanishTitle: "TERMINATOR",
    year: 1984,
    director: "James Cameron",
    actors: ["Arnold Schwarzenegger", "Linda Hamilton", "Michael Biehn"],
    synopsis:
      "Un asesino cíborg es enviado desde el futuro para matar a Sarah Connor, cuyo hijo no nacido salvará a la humanidad.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
  },
  {
    id: 32,
    title: "The Time Traveler's Wife",
    spanishTitle: "LA ESPOSA DEL VIAJERO DEL TIEMPO / TE AMARÉ POR SIEMPRE",
    year: 2009,
    director: "Robert Schwentke",
    actors: ["Eric Bana", "Rachel McAdams", "Ron Livingston"],
    synopsis:
      "Un bibliotecario con un desorden genético viaja involuntariamente en el tiempo, complicando su relación amorosa.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/J3ewuzQwhFro0pDpdcbZ4j7MYy.jpg",
  },
  {
    id: 33,
    title: "Timecop",
    spanishTitle: "TIMECOP: POLICÍA EN EL TIEMPO",
    year: 1994,
    director: "Peter Hyams",
    actors: ["Jean-Claude Van Damme", "Mia Sara", "Ron Silver"],
    synopsis:
      "Un agente de una unidad policial que vigila los viajes en el tiempo debe detener a un político corrupto.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/bgxP6ws8ErBiarnb4S93vv0lkf4.jpg",
  },
  {
    id: 34,
    title: "Time Lapse",
    spanishTitle: "LAPSO DE TIEMPO",
    year: 2014,
    director: "Bradley King",
    actors: ["Danielle Panabaker", "Matt O'Leary", "George Finn"],
    synopsis:
      "Tres amigos descubren una cámara gigante que toma fotos de lo que ocurrirá en su sala de estar 24 horas en el futuro.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/lfggWOEZ9pL34XKYisBTJ0vFnFS.jpg",
  },
  {
    id: 35,
    title: "Time Freak",
    spanishTitle: "FANÁTICO DEL TIEMPO / AMOR DE IDA Y VUELTA",
    year: 2018,
    director: "Andrew Bowler",
    actors: ["Asa Butterfield", "Sophie Turner", "Skyler Gisondo"],
    synopsis:
      "Un genio de la física construye una máquina del tiempo para intentar arreglar su relación con su ex-novia.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/oSDctngY0Oiq6l2LcJDk8k6smvg.jpg",
  },
  {
    id: 36,
    title: "Timeline",
    spanishTitle: "RESCATE EN EL TIEMPO",
    year: 2003,
    director: "Richard Donner",
    actors: ["Paul Walker", "Gerard Butler", "Frances O'Connor"],
    synopsis:
      "Un grupo de estudiantes de arqueología viaja al pasado para rescatar a su profesor atrapado en la Francia del siglo XIV.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/vexgfnhdlKERRMMdyVYLBXx89LW.jpg",
  },
  {
    id: 37,
    title: "X-Men: Days of Future Past",
    spanishTitle: "X-MEN: DÍAS DEL FUTURO PASADO",
    year: 2014,
    director: "Bryan Singer",
    actors: ["Hugh Jackman", "James McAvoy", "Michael Fassbender"],
    synopsis:
      "Wolverine es enviado al pasado para cambiar la historia y evitar un evento que resulta en la perdición de humanos y mutantes.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/tYfijzolzgoMOtegh1Y7j2Enorg.jpg",
  },
  {
    id: 38,
    title: "Zack Snyder's Justice League",
    spanishTitle: "LA LIGA DE LA JUSTICIA DE ZACK SNYDER",
    year: 2021,
    director: "Zack Snyder",
    actors: ["Ben Affleck", "Henry Cavill", "Gal Gadot", "Jason Momoa"],
    synopsis:
      "Batman reúne a la Liga de la Justicia para salvar la Tierra de una invasión tras la muerte de Superman. Juntos deben evitar que Steppenwolf destruya el mundo.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
  },
  {
    id: 39,
    title: "12 Monkeys",
    spanishTitle: "12 MONOS",
    year: 1995,
    director: "Terry Gilliam",
    actors: ["Bruce Willis", "Brad Pitt", "Madeleine Stowe"],
    synopsis:
      "Un convicto es enviado al pasado para recolectar información sobre un virus que ha aniquilado a la mayor parte de la humanidad.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/gt3iyguaCIw8DpQZI1LIN5TohM2.jpg",
  },
  {
    id: 40,
    title: "57 Seconds",
    spanishTitle: "57 SEGUNDOS",
    year: 2023,
    director: "Rusty Cundieff",
    actors: ["Josh Hutcherson", "Morgan Freeman", "Greg Germann"],
    synopsis:
      "Un bloguero tecnológico descubre un anillo que le permite viajar 57 segundos al pasado, usándolo para vengarse de una farmacéutica.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_face/dfS5qHWFuXyZQnwYREwb7N4qU5p.jpg",
  },
];
return NextResponse.json(movies);
}
