const plants = [
  {
    id: "p1",
    "nombre": "Cactus pequeño",
    "tipo": "Cactus",
    "precio": 5000,
    "luz": "Alta",
    "riego": "Bajo",
    "descripcion": "Suculenta medicinal, muy resistente. Ideal para interior luminoso.",
    "img": "/images/cactuspequeño.jpeg"
  },
  {
    id: "p2",
    "nombre": "Suculenta jaspeada",
    "tipo": "Suculenta",
    "precio": 10000,
    "luz": "Alta",
    "riego": "Moderado",
    "descripcion": "Hojas delicadas, evita manipulaciones fuertes. Ideal para interiores cálidos.",
    "img": "/images/suculentajaspeada.jpeg"
  },
  {
    id: "p3",
    "nombre": "Ixora",
    "tipo": "Planta ornamental",
    "precio": 18000,
    "luz": "Alta",
    "riego": "Moderado",
    "descripcion": "Planta de flores rojas y amarillas. Ideal para jardines, florece casi todo el año.",
    "img": "/images/ixora.jpg"
  },
  {
    id: "p4",
    "nombre": "Episcia",
    "tipo": "Planta ornamental",
    "precio": 15000,
    "luz": "Media",
    "riego": "Moderado",
    "descripcion": "Planta con hojas aterciopeladas. Ideal en interiores con luz indirecta brillante.",
    "img": "/images/episcia.jpeg"
  },
  {
    id: "p5",
    "nombre": "Portulaca",
    "tipo": "Planta ornamental",
    "precio": 8000,
    "luz": "Alta",
    "riego": "Bajo",
    "descripcion": "Flor resistente que tolera sequías, ideal para exteriores soleados.",
    "img": "/images/portulaca.jpeg"
  },
  {
    id: "p6",
    "nombre": "Mussaenda",
    "tipo": "Planta ornamental",
    "precio": 14000,
    "luz": "Alta",
    "riego": "Moderado",
    "descripcion": "Planta tropical de hojas grandes, ideal para interiores o jardines cálidos.",
    "img": "/images/mussaenda.png"
  },
  {
    id: "p7",
    "nombre": "Drácena marginata",
    "tipo": "Planta ornamental",
    "precio": 13000,
    "luz": "Alta",
    "riego": "Moderado",
    "descripcion": "Planta resistente de interior, tolera poca luz.",
    "img": "/images/dracena.avif"
  },
  {
    id: "p8",
    "nombre": "Fitonia",
    "tipo": "Planta ornamental",
    "precio": 11000,
    "luz": "Baja",
    "riego": "Alto",
    "descripcion": "Planta ideal para ambientes húmedos con luz indirecta.",
    "img": "/images/Fitonia.jpg"
  },
  {
    id: "p9",
    "nombre": "Aglaonema",
    "tipo": "Planta ornamental",
    "precio": 9000,
    "luz": "Baja",
    "riego": "Moderado",
    "descripcion": "Planta de interior, ideal para zonas con poca luz y alta humedad.",
    "img": "/images/aglaonema.jpeg"
  },
  {
    id: "p10",
    "nombre": "Begonia de Flor",
    "tipo": "Planta ornamental",
    "precio": 12000,
    "luz": "Media",
    "riego": "Moderado",
    "descripcion": "Planta de flores coloridas, ideal para interiores luminosos.",
    "img": "/images/begoniaflor.png"
  },
  {
    id: "p11",
    "nombre": "Begonia Rex",
    "tipo": "Planta ornamental",
    "precio": 14000,
    "luz": "Alta",
    "riego": "Moderado",
    "descripcion": "Planta con hojas de colores vibrantes, ideal para interiores.",
    "img": "/images/begoniahoja.jpeg"
  },
  {
    id: "p12",
    "nombre": "Ficus Lyrata",
    "tipo": "Árbol ornamental",
    "precio": 25000,
    "luz": "Alta",
    "riego": "Moderado",
    "descripcion": "Árbol de hojas grandes y brillantes, ideal para interiores amplios.",
    "img": "/images/higueraviolin.jpeg"
  },
  {
    id: "p13",
    "nombre": "Difenbaquia",
    "tipo": "Planta ornamental",
    "precio": 10000,
    "luz": "Media",
    "riego": "Moderado",
    "descripcion": "Planta de hojas grandes, ideal para interiores cálidos.",
    "img": "/images/difenbaquia.jpeg"
  },
  {
    id: "p14",
    "nombre": "Planta de Jade",
    "tipo": "Suculenta",
    "precio": 11000,
    "luz": "Alta",
    "riego": "Bajo",
    "descripcion": "Planta suculenta de fácil cuidado, ideal para interiores luminosos.",
    "img": "/images/plantajade.avif"
  },
  {
    id: "p15",
    "nombre": "Ruellia",
    "tipo": "Planta ornamental",
    "precio": 9500,
    "luz": "Alta",
    "riego": "Moderado",
    "descripcion": "Planta con flores moradas, ideal para exteriores soleados.",
    "img": "/images/petunia.jpeg"
  },
  {
    id: "p16",
    "nombre": "Filodendro Lima",
    "tipo": "Planta ornamental",
    "precio": 12000,
    "luz": "Media",
    "riego": "Moderado",
    "descripcion": "Planta con hojas en forma de corazón, ideal para interiores luminosos.",
    "img": "/images/filodendrocorazon.jpeg"
  },
  {
    id: "p17",
    "nombre": "Zamioculca",
    "tipo": "Planta ornamental",
    "precio": 8000,
    "luz": "Baja",
    "riego": "Bajo",
    "descripcion": "Planta resistente de bajo mantenimiento, ideal para interiores poco luminosos.",
    "img": "/images/zamioculca.jpeg"
  },
  {
    id: "p18",
    "nombre": "Alegría de la Casa",
    "tipo": "Planta ornamental",
    "precio": 10000,
    "luz": "Baja",
    "riego": "Alto",
    "descripcion": "Planta colorida ideal para interiores húmedos y sombreados.",
    "img": "/images/balsamo.jpeg"
  },
  {
    id: "p19",
    "nombre": "Caladio",
    "tipo": "Planta ornamental",
    "precio": 13000,
    "luz": "Alta",
    "riego": "Moderado",
    "descripcion": "Planta con hojas coloridas, ideal para interiores luminosos.",
    "img": "/images/caladio.jpeg"
  },
  {
    id: "p20",
    "nombre": "Mala Madre",
    "tipo": "Planta ornamental",
    "precio": 9000,
    "luz": "Baja",
    "riego": "Moderado",
    "descripcion": "Planta resistente de bajo mantenimiento para interiores.",
    "img": "/images/malamadre.jpeg"
  },
  {
    id: "p21",
    "nombre": "Rosal Miniatura",
    "tipo": "Planta ornamental",
    "precio": 15000,
    "luz": "Alta",
    "riego": "Alto",
    "descripcion": "Planta con flores rosadas o rojas, ideal para interiores y exteriores.",
    "img": "/images/rosalminiatura.jpeg"
  },
  {
    id: "p22",
    "nombre": "Duranta",
    "tipo": "Planta ornamental",
    "precio": 12000,
    "luz": "Alta",
    "riego": "Moderado",
    "descripcion": "Planta resistente, ideal para jardines y exteriores soleados.",
    "img": "/images/duranta.jpeg"
  },
  {
    id: "p23",
    "nombre": "Higuera Banyan",
    "tipo": "Árbol ornamental",
    "precio": 20000,
    "luz": "Alta",
    "riego": "Moderado",
    "descripcion": "Árbol tropical de crecimiento grande, ideal para espacios amplios.",
    "img": "/images/higuerabanyan.jpg"
  },
  {
    id: "p24",
    "nombre": "Vinca de Madagascar",
    "tipo": "Planta ornamental",
    "precio": 9500,
    "luz": "Alta",
    "riego": "Moderado",
    "descripcion": "Planta resistente, ideal para exteriores soleados con flores rosadas.",
    "img": "/images/vincamadagascar.jpeg"
  },
  {
    id: "p25",
    "nombre": "Plectranthus",
    "tipo": "Planta ornamental",
    "precio": 10000,
    "luz": "Media",
    "riego": "Moderado",
    "descripcion": "Planta apreciada por su follaje decorativo y flores moradas.",
    "img": "/images/Plectranthus.jpeg"
  },
  {
    id: "p26",
    "nombre": "Anturio Corazón",
        "tipo": "Planta ornamental",
        "precio": null,
        "luz": "Indirecta media o brillante",
        "riego": "Moderado",
        "descripcion": "Necesita humedad muy alta y sustrato muy poroso a base de corteza y musgo.",
        "img": "/images/anturiocorazon.jpeg"
  },
  {
    id: "p27",
    "nombre": "Flor de Seda",
        "tipo": "Planta ornamental",
        "precio": null,
        "luz": "Pleno sol directo",
        "riego": "Muy bajo",
        "descripcion": "Tolera muy bien la sequía. Sustrato muy drenante y arenoso.",
        "img": "/images/flordeseda.jpeg"
  },
  {
    id: "p28",
    "nombre": "Aglaonema Roja",
        "tipo": "Planta ornamental",
        "precio": null,
        "luz": "Indirecta brillante a media",
        "riego": "Moderado",
        "descripcion": "Requiere humedad alta para mantener sus tonos vibrantes.",
         "img": "/images/aglaonemaroja.jpeg"
  },
  {
    id: "p29",
     "nombre": "Anturio Blanco y Rosa",
        "tipo": "Planta ornamental",
        "precio": null,
        "luz": "Indirecta brillante",
        "riego": "Moderado",
        "descripcion": "Humedad muy alta y sustrato aireado con corteza y musgo.",
       "img": "/images/anturioblancorosa.jpeg"
  },
  {
    id: "p30",
    "nombre": "Cuna de Moises",
    "tipo": "Planta ornamental",
    "precio": 11000,
    "luz": "Media",
    "riego": "Moderado",
    "descripcion": "Planta ornamental con hojas grandes y variegadas.",
     "img": "/images/cunamoises.jpeg"
  },
  {
    id: "p31",
    "nombre": "Tradescantia Tricolor",
    "tipo": "Planta ornamental",
    "precio": 15000,
    "luz": "Indirecta brillante",
    "riego": "Moderado",
    "descripcion": "Crece rapido y se cultiva como colgante.",
     "img": "/images/tradescantia.jpeg"
  },
  {
    id: "p32",
    "nombre": "Gloxinia",
    "tipo": "Planta ornamental",
    "precio": 18000,
    "luz": "Indirecta brillante",
    "riego": "Inmersion",
    "descripcion": "Ideal en luz indirecta brillante. Sensible a manchas en hojas y flores.",
     "img": "/images/gloxinia.jpeg",
  },
  {
    id: "p33",
    "nombre": "Peperomia Obtusifolia",
    "tipo": "Planta ornamental",
    "precio": 13000,
    "luz": "Media",
    "riego": "Dejar secar el sustrato antes de regar",
    "descripcion": "Planta con hojas redondas, ideal para interiores.",
     "img": "/images/peperomiasandia.jpeg"
  },
  {
    id: "p34",
    "nombre": "Difenbaquia",
    "tipo": "Planta ornamental",
    "precio": 14000,
    "luz": "Indirecta media",
    "riego": "Ligeramente humedo",
    "descripcion": "Planta toxica, hojas grandes y de color amarillo/blanco.",
     "img": "/images/difenbaquia.jpeg"
  },
  {
    id: "p35",
    "nombre": "Planta de Cera",
    "tipo": "Planta ornamental",
    "precio": 15000,
    "luz": "Indirecta brillante",
    "riego": "Dejar secar entre riegos",
    "descripcion": "Planta colgante que florece con mucha luz.",
     "img": "/images/plantacera.png"
  },
  {
    id: "p36",
    "nombre": "Helecho de Boston",
    "tipo": "Helecho",
    "precio": 9500,
    "luz": "Baja a media",
    "riego": "Humedad constante",
    "descripcion": "Planta con frondas finas, ideal para interiores h\u00famedos.",
    "img": "/images/helechoboston.jpeg"
  },
  {
    id: "p37",
    "nombre": "Helecho Cuerno de Alce",
    "tipo": "Helecho",
    "precio": 12000,
    "luz": "Indirecta brillante",
    "riego": "Sumergir la maceta",
    "descripcion": "Planta con frondas grandes, mejor crece sobre troncos.",
    "img": "/images/helechocuernoalce.jpeg"
  },
  {
    id: "p38",
    "nombre": "Helecho de Espada",
    "tipo": "Helecho",
    "precio": 9000,
    "luz": "Media",
    "riego": "Humidificaci\u00f3n constante",
    "descripcion": "Planta con frondas colgantes, ideal para interiores.",
    "img": "/images/helechoespada.jpeg"
  },
  {
    id: "p39",
    "nombre": "Palmera Areca",
    "tipo": "Planta ornamental",
    "precio": 20000,
    "luz": "Indirecta brillante",
    "riego": "Uniformemente h\u00famedo",
    "descripcion": "Palmera que tolera media sombra, con alta humedad.",
     "img": "/images/palmeraareca.webp"
  },
  {
    id: "p40",
    "nombre": "Cheflera",
    "tipo": "Planta ornamental",
    "precio": 13000,
    "luz": "Indirecta brillante",
    "riego": "Secar el tercio superior del sustrato",
    "descripcion": "Planta robusta que tolera la sequ\u00eda.",
     "img": "/images/cheflera.webp"
  },
  {
    id: "p41",
    "nombre": "Alocasia de Hoja de Coraza",
        "tipo": "Planta ornamental",
        "precio": null,
        "luz": "Indirecta brillante y filtrada",
        "riego": "Constante pero sin encharcar",
        "descripcion": "Requiere humedad alta. Puede entrar en dormancia en invierno.",
        "img": "/images/alocasiacoraza.jpeg"
  },
  {
    id: "p42",
    "nombre": "Sabila",
    "tipo": "Planta ornamental",
    "precio": 11000,
    "luz": "Indirecta brillante",
    "riego": "Moderado",
    "descripcion": "Planta con hojas grandes y suculentas.",
    "img": "/images/sabila.jpeg"
  },
  {
    id: "p43",
    "nombre": "Singonio",
    "tipo": "Planta ornamental",
    "precio": 10000,
    "luz": "Indirecta brillante",
    "riego": "Secar la capa superior del sustrato",
    "descripcion": "Planta trepadora con hojas en forma de flecha.",
    "img": "/images/singonio.jpeg"
  },

  {
    id: "p44",
    "nombre": "Anturio Hoja Grande",
    "tipo": "Planta ornamental",
    "precio": 15000,
    "luz": "Indirecta brillante",
    "riego": "Moderado",
    "descripcion": "Planta con flores rojas, ideal para interiores.",
     "img": "/images/anturiospp.jpg"
  },
  {
    id: "p45",
    "nombre": "Buganvilla",
    "tipo": "Planta ornamental",
    "precio": 17000,
    "luz": "Alta",
    "riego": "Bajo",
    "descripcion": "Flor de colores vivos, ideal para exteriores soleados.",
     "img": "/images/buganvilla.jpeg"
  },
  {
    id: "p46",
    "nombre": "Arbol de la vida",
    "tipo": "Arbol ornamental",
    "precio": 20000,
    "luz": "Pleno sol",
    "riego": "Moderado",
    "descripcion": "Arbol que crece bien en exteriores, requiere proteccion contra vientos extremos.",
    "img": "/images/arboldevida.jpeg"
  },
  {
    id: "p47",
    "nombre": "Sedum Lemon Coral",
    "tipo": "Suculenta",
    "precio": 12000,
    "luz": "Brillante",
    "riego": "Muy bajo",
    "descripcion": "Suculenta que necesita poco riego y luz brillante.",
     "img": "/images/sedumlemon.jpeg"
  },
  {
    id: "p48",
    "nombre": "Callisia Pink Lady",
    "tipo": "Suculenta",
    "precio": 15000,
    "luz": "Indirecta brillante",
    "riego": "Moderado",
    "descripcion": "Planta colgante con hojas rosadas y blancas.",
     "img": "/images/callisiarepens.webp"
  },
  {
    id: "p49",
    "nombre": "Árbol de la Abundancia",
    "tipo": "Suculenta",
    "precio": 10000,
    "luz": "Brillante",
    "riego": "Espaciado",
    "descripcion": "Planta que necesita mucho sol y riego espaciado.",
   "img": "/images/arbolabundancia.jpeg"
  },
  {
    id: "p50",
    "nombre": "Euphorbia",
    "tipo": "Suculenta",
    "precio": 11000,
    "luz": "Brillante",
    "riego": "Moderado",
    "descripcion": "Planta espinosa, con savia toxica. Necesita luz brillante.",
     "img": "/images/euforbia.jpg"
  },
  {
    id: "p51",
    "nombre": "Rosa del desierto",
    "tipo": "Suculenta",
    "precio": 15000,
    "luz": "Brillante",
    "riego": "Espaciado",
    "descripcion": "Planta que necesita luz directa y riego controlado.",
    "img": "/images/rosadesierto.jpeg"
  },
  {
    id: "p52",
    "nombre": "Echeveria",
    "tipo": "Suculenta",
    "precio": 12000,
    "luz": "Brillante",
    "riego": "Espaciado",
    "descripcion": "Planta con hojas carnosas, ideal para interiores c\u00e1lidos.",
     "img": "/images/echeveria.jpeg"
  },
  {
    id: "p53",
    "nombre": "Aloe Vera",
    "tipo": "Suculenta",
    "precio": 12000,
    "luz": "Sol directo",
    "riego": "Espaciado",
    "descripcion": "Planta medicinal que necesita sol directo y riego espaciado.",
     "img": "/images/aloevera.jpeg"
  },
  {
    id: "p54",
    "nombre": "Lengua de Tigre",
    "tipo": "Planta ornamental",
    "precio": null,
    "luz": "Indirecta brillante",
    "riego": "Muy bajo",
    "descripcion": "Planta muy resistente, sensible al exceso de agua y a la pudrición.",
     "img": "/images/lenguatigre.webp"
  }
  ,
  {
    id: "p55",
    "nombre": "Cactus coreano",
    "tipo": "Cactus",
    "precio": 7000,
    "luz": "Indirecta brillante",
    "riego": "Muy bajo",
    "descripcion": "Cactus peque\u00f1o y espinoso ideal para interiores luminosos.",
     "img": "/images/cactuscoreano.jpeg"
  },
  {
    id: "p56",
    "nombre": "Agave Reina Victoria",
    "tipo": "Suculenta",
    "precio": 12000,
    "luz": "Brillante",
    "riego": "Muy bajo",
    "descripcion": "Planta resistente que requiere sol directo y riego m\u00ednimo.",
     "img": "/images/reinavictoria.jpg"
  },
  {
    id: "p56",
    "nombre": "Calatea Pavo Real",
        "tipo": "Planta ornamental",
        "precio": null,
        "luz": "Indirecta media o brillante",
        "riego": "Mantener ligeramente húmedo",
        "descripcion": "Necesita humedad alta para evitar puntas secas.",
         "img": "/images/calateapavo.png"
  },
];

export default plants;
