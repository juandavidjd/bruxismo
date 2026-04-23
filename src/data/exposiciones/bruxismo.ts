export type CuerpoBloque =
  | { tipo: "parrafo"; texto: string }
  | { tipo: "lista"; items: { titulo?: string; texto: string }[] }
  | { tipo: "destacado"; texto: string; variante: "info" | "alerta" }
  | { tipo: "subtitulo"; texto: string };

export type Slide = {
  id: string;
  orden: number;
  eyebrow: string;
  title: string;
  subtitle?: string;
  resumen: string;
  cuerpo: CuerpoBloque[];
  imagePrompt: string;
  imageAltText: string;
  duracionAutoplay?: number;
};

export const exposicionBruxismo = {
  id: "bruxismo-anatomia-funcion-impacto",
  titulo: "Bruxismo: anatomía, función e impacto sistémico",
  linea: "MEDICAL COVER'S",
  equipoMedico: ["Dra. Paola Jiménez", "Dr. Carlos Jiménez"],
  totalSlides: 17,
  slides: [
    {
      id: "01-portada",
      orden: 1,
      eyebrow: "MEDICAL COVER'S · EXPOSICIÓN CLÍNICA",
      title: "Bruxismo",
      subtitle: "Anatomía, función e impacto sistémico",
      resumen: "Una mirada integral desde la anatomía hasta el impacto en todo el cuerpo.",
      cuerpo: [
        { tipo: "parrafo", texto: "Exposición clínica de la línea MEDICAL COVER'S destinada a odontólogos y profesionales del dolor orofacial." },
        { tipo: "parrafo", texto: "Recorrido en seis secciones: definición, sistema estomatognático, articulación temporomandibular, musculatura masticatoria, función mandibular e impacto sistémico." }
      ],
      imagePrompt: "Clean editorial medical illustration of a human mandible and temporomandibular joint in three-quarter view, isolated on deep teal gradient background, soft rim lighting, minimalist scientific style, no text, anatomical accuracy, photographic realism with subtle 3D render quality, color palette dominated by teal and ivory whites",
      imageAltText: "Ilustración médica de mandíbula y articulación temporomandibular sobre fondo teal"
    },
    {
      id: "02-agenda",
      orden: 2,
      eyebrow: "AGENDA",
      title: "Recorrido de la exposición",
      resumen: "Seis secciones que conectan anatomía con repercusión clínica real.",
      cuerpo: [
        { tipo: "lista", items: [
          { titulo: "01", texto: "¿Qué es el bruxismo? Definición clínica, tipos y epidemiología" },
          { titulo: "02", texto: "Sistema estomatognático: huesos, articulación y músculos en contexto" },
          { titulo: "03", texto: "Articulación temporomandibular: el cóndilo y sus estructuras asociadas" },
          { titulo: "04", texto: "Músculos de la masticación: elevadores, depresores y suprahioideos" },
          { titulo: "05", texto: "Función mandibular: movimientos normales y parafuncionales" },
          { titulo: "06", texto: "Impacto sistémico: dolor orofacial, cefalea, cuello y espalda" }
        ]}
      ],
      imagePrompt: "Abstract minimal medical diagram, six concentric arcs or nodes in teal and cyan representing progression from anatomy to systemic impact, clean white background, editorial infographic style, no text, sophisticated medical journal aesthetic",
      imageAltText: "Diagrama minimalista de seis secciones de la exposición"
    },
    {
      id: "03-definicion",
      orden: 3,
      eyebrow: "DEFINICIÓN CLÍNICA",
      title: "¿Qué es el bruxismo?",
      resumen: "Comportamiento muscular que, sostenido, genera daño multisistémico.",
      cuerpo: [
        { tipo: "destacado", variante: "info", texto: "Actividad repetitiva de los músculos masticatorios caracterizada por apretamiento o rechinamiento dentario y/o por tensión mandibular sin contacto dental." },
        { tipo: "parrafo", texto: "No es una enfermedad por sí sola: es un comportamiento muscular que, sostenido, genera daño multisistémico." },
        { tipo: "subtitulo", texto: "Según el momento" },
        { tipo: "lista", items: [
          { titulo: "Bruxismo del sueño", texto: "Trastorno del movimiento durante el sueño; episodios rítmicos de actividad muscular masticatoria (RMMA). Suele asociarse a microdespertares." },
          { titulo: "Bruxismo de vigilia", texto: "Apretamiento diurno, asociado a estrés, concentración o posturas sostenidas; rara vez hay rechinamiento." }
        ]},
        { tipo: "subtitulo", texto: "Según el patrón" },
        { tipo: "lista", items: [
          { titulo: "Céntrico (apretamiento)", texto: "Fuerza estática mantenida en oclusión. Daño principal: muscular y articular." },
          { titulo: "Excéntrico (rechinamiento)", texto: "Movimientos laterales o protrusivos con contacto dental. Daño principal: desgaste y fractura dentaria." }
        ]}
      ],
      imagePrompt: "Split composition showing a sleeping person in profile and a working awake person in profile, both subtly clenching their jaw, soft grayscale with teal accent highlighting the jaw area, editorial medical photography style, calm mood, clean minimal background",
      imageAltText: "Composición de bruxismo del sueño y bruxismo de vigilia"
    },
    {
      id: "04-sistema-estomatognatico",
      orden: 4,
      eyebrow: "MARCO ANATÓMICO",
      title: "El sistema estomatognático",
      resumen: "Unidad funcional donde huesos, músculos, nervios y dientes trabajan sincronizados.",
      cuerpo: [
        { tipo: "parrafo", texto: "Unidad funcional donde huesos, articulaciones, músculos, dientes, inervación y vascularización trabajan de forma sincronizada. El bruxismo altera este equilibrio y cualquiera de sus componentes puede convertirse en fuente de dolor." },
        { tipo: "lista", items: [
          { titulo: "Esqueleto", texto: "Maxilar, mandíbula, temporal, esfenoides, cigomático, hioides y cervicales" },
          { titulo: "ATM", texto: "Articulación temporomandibular con su disco y cápsula" },
          { titulo: "Musculatura", texto: "Elevadores, depresores, supra e infrahioideos, faciales accesorios" },
          { titulo: "Oclusión", texto: "Arcadas dentarias, contactos estáticos y dinámicos" },
          { titulo: "Control neural", texto: "Trigémino (V), facial (VII), núcleos motor y sensitivo" },
          { titulo: "Irrigación", texto: "Arteria maxilar, temporal superficial y ramas faciales" }
        ]}
      ],
      imagePrompt: "Anatomical cross-section illustration of the human stomatognathic system, lateral skull view showing bones, muscles, and nerves in muted color coding, scientific medical textbook style, clean white background, teal highlights on key structures, high detail, no text labels",
      imageAltText: "Sección anatómica lateral del sistema estomatognático"
    },
    {
      id: "05-huesos",
      orden: 5,
      eyebrow: "ANATOMÍA ÓSEA",
      title: "Huesos involucrados en el bruxismo",
      resumen: "Ocho estructuras óseas que reciben, transmiten y redistribuyen la fuerza.",
      cuerpo: [
        { tipo: "lista", items: [
          { titulo: "Temporal", texto: "Aloja la fosa mandibular y la eminencia articular; recibe la cabeza del cóndilo." },
          { titulo: "Mandíbula", texto: "Único hueso móvil del cráneo. Su cóndilo articula con el temporal; su cuerpo soporta la arcada inferior." },
          { titulo: "Maxilar", texto: "Fija la arcada superior y forma el paladar duro junto con los palatinos." },
          { titulo: "Esfenoides", texto: "Sus apófisis pterigoides son origen del pterigoideo medial y lateral." },
          { titulo: "Cigomático", texto: "Forma el arco cigomático, origen del músculo masetero." },
          { titulo: "Hioides", texto: "Hueso suspendido; punto de anclaje de supra e infrahioideos que equilibran la mandíbula." },
          { titulo: "Vértebras cervicales", texto: "C1–C3 comparten inervación con el trigémino; su tensión se acopla al bruxismo." },
          { titulo: "Palatinos", texto: "Completan el paladar óseo y participan en la inserción del pterigoideo medial." }
        ]},
        { tipo: "destacado", variante: "info", texto: "La mandíbula es el único hueso móvil, pero el temporal y el esfenoides reciben y redistribuyen cada fuerza generada durante el bruxismo." }
      ],
      imagePrompt: "Clean 3D medical rendering of a human skull in lateral view, mandible, temporal, sphenoid, zygomatic and hyoid bones highlighted with subtle teal and cyan tones, ivory bone base color, studio lighting, scientific visualization style, no text, isolated on white background",
      imageAltText: "Cráneo lateral con huesos del sistema estomatognático resaltados"
    },
    {
      id: "06-atm-condilo",
      orden: 6,
      eyebrow: "EL CÓNDILO Y SUS ESTRUCTURAS",
      title: "Articulación temporomandibular (ATM)",
      resumen: "Única articulación del cuerpo que actúa en pareja. Combina rotación y traslación.",
      cuerpo: [
        { tipo: "subtitulo", texto: "Articulación bicondílea y sinovial" },
        { tipo: "parrafo", texto: "Única articulación del cuerpo que actúa en pareja: derecha e izquierda se mueven siempre juntas. Combina rotación (en el compartimento inferior) y traslación (en el superior), lo que le da su amplio rango de movimiento." },
        { tipo: "destacado", variante: "alerta", texto: "En el bruxismo, el cóndilo soporta fuerzas 3–10 veces mayores que en masticación normal, comprime el disco articular y puede desplazarlo." },
        { tipo: "subtitulo", texto: "Estructuras de la ATM" },
        { tipo: "lista", items: [
          { titulo: "Cóndilo mandibular", texto: "Eminencia ovoidea de la rama; articula contra la fosa temporal." },
          { titulo: "Fosa mandibular", texto: "Cavidad del temporal que aloja al cóndilo en reposo." },
          { titulo: "Eminencia articular", texto: "Prominencia por delante de la fosa; guía el cóndilo en la apertura." },
          { titulo: "Disco articular", texto: "Fibrocartílago bicóncavo; amortigua y divide la articulación en dos compartimentos." },
          { titulo: "Cápsula y ligamentos", texto: "Cápsula fibrosa con ligamentos temporomandibular, esfenomandibular y estilomandibular." },
          { titulo: "Sinovial y líquido", texto: "Membrana que lubrica y nutre el cartílago articular." }
        ]}
      ],
      imagePrompt: "Close-up detailed anatomical illustration of the temporomandibular joint, showing condyle, fossa, articular disc and capsule in cross-section, editorial medical style, teal and cream color palette, subtle depth and layering, clean white background, scientific accuracy, no text",
      imageAltText: "Corte anatómico detallado de la articulación temporomandibular"
    },
    {
      id: "07-musculos-elevadores",
      orden: 7,
      eyebrow: "MUSCULATURA MASTICATORIA · PARTE 1",
      title: "Músculos elevadores de la mandíbula",
      resumen: "Masetero, temporal y pterigoideo medial generan la fuerza de apretamiento.",
      cuerpo: [
        { tipo: "parrafo", texto: "Tres músculos cierran la boca y generan la fuerza de apretamiento. Son los principales afectados en el bruxismo céntrico." },
        { tipo: "subtitulo", texto: "Masetero — elevador principal" },
        { tipo: "lista", items: [
          { titulo: "Origen", texto: "Arco cigomático" },
          { titulo: "Inserción", texto: "Ángulo y rama mandibular (cara externa)" },
          { titulo: "Función", texto: "Cierre potente. Músculo más fuerte por unidad de área." },
          { titulo: "Clínica", texto: "Hipertrofia visible, rostro cuadrado, dolor preauricular." }
        ]},
        { tipo: "subtitulo", texto: "Temporal — elevador + retrusor" },
        { tipo: "lista", items: [
          { titulo: "Origen", texto: "Fosa temporal" },
          { titulo: "Inserción", texto: "Apófisis coronoides mandibular" },
          { titulo: "Función", texto: "Fibras anteriores elevan; posteriores retruyen la mandíbula." },
          { titulo: "Clínica", texto: "Dolor en sien, cefalea tipo 'banda'." }
        ]},
        { tipo: "subtitulo", texto: "Pterigoideo medial — elevador profundo" },
        { tipo: "lista", items: [
          { titulo: "Origen", texto: "Fosa pterigoidea del esfenoides" },
          { titulo: "Inserción", texto: "Cara interna del ángulo mandibular" },
          { titulo: "Función", texto: "Cierre y lateralidad contralateral. Forma con el masetero el 'cabestrillo' mandibular." },
          { titulo: "Clínica", texto: "Dolor interno, difícil de palpar directamente." }
        ]}
      ],
      imagePrompt: "Lateral anatomical view of human head showing masseter and temporalis muscles in deep red-brown tones over pale skull, medical textbook style illustration, muscle fibers clearly visible, teal background with gradient, no text, scientific accuracy",
      imageAltText: "Vista lateral de músculos masetero y temporal sobre el cráneo"
    },
    {
      id: "08-depresores-suprahioideos",
      orden: 8,
      eyebrow: "MUSCULATURA MASTICATORIA · PARTE 2",
      title: "Depresores y estabilizadores",
      resumen: "Pterigoideo lateral, único depresor entre los cuatro masticatorios. Llave de la ATM.",
      cuerpo: [
        { tipo: "subtitulo", texto: "Pterigoideo lateral — llave de la ATM" },
        { tipo: "parrafo", texto: "Único depresor entre los cuatro músculos masticatorios." },
        { tipo: "lista", items: [
          { titulo: "Fascículo superior", texto: "Ala mayor del esfenoides → disco articular y cápsula" },
          { titulo: "Fascículo inferior", texto: "Placa pterigoidea lateral → cuello del cóndilo" },
          { titulo: "Función", texto: "Apertura (protracción del cóndilo), protrusión y lateralidad contralateral. Estabiliza el disco articular." }
        ]},
        { tipo: "destacado", variante: "alerta", texto: "Su disfunción es una causa frecuente de chasquido articular, desplazamiento discal y dolor retro-orbitario referido." },
        { tipo: "subtitulo", texto: "Suprahioideos — sobre el hioides" },
        { tipo: "parrafo", texto: "Digástrico · Milohioideo · Genihioideo · Estilohioideo. Si el hioides está fijo por los infrahioideos, deprimen la mandíbula." },
        { tipo: "subtitulo", texto: "Infrahioideos — bajo el hioides" },
        { tipo: "parrafo", texto: "Esternohioideo · Omohioideo · Esternotiroideo · Tirohioideo. Estabilizan el hioides para que los suprahioideos abran la boca." },
        { tipo: "destacado", variante: "info", texto: "La tensión de esta cadena explica el dolor submandibular, cervical anterior y la sensación de 'nudo en la garganta' frecuente en bruxistas." }
      ],
      imagePrompt: "Deep anatomical cross-section of mouth floor and pterygoid region, showing lateral pterygoid muscle and suprahyoid muscles in detail, medical textbook illustration style, warm muscle tones on pale background, teal accent highlights, scientific precision, no text labels",
      imageAltText: "Sección anatómica profunda de pterigoideo lateral y suprahioideos"
    },
    {
      id: "09-movimientos",
      orden: 9,
      eyebrow: "FISIOLOGÍA MASTICATORIA",
      title: "Movimientos mandibulares: función normal",
      resumen: "Apertura, cierre, protrusión, retrusión y lateralidad — los cinco movimientos básicos.",
      cuerpo: [
        { tipo: "lista", items: [
          { titulo: "Apertura (descenso)", texto: "Músculos: pterigoideo lateral + suprahioideos + digástrico. ATM: rotación inicial + traslación del cóndilo hacia adelante." },
          { titulo: "Cierre (elevación)", texto: "Músculos: masetero + temporal + pterigoideo medial. ATM: retroceso del cóndilo a la fosa." },
          { titulo: "Protrusión", texto: "Músculos: pterigoideos laterales bilaterales. ATM: traslación anterior de ambos cóndilos." },
          { titulo: "Retrusión", texto: "Músculos: fibras posteriores del temporal. ATM: desplazamiento posterior del cóndilo." },
          { titulo: "Lateralidad (movimiento de Bennett)", texto: "Músculos: pterigoideo lateral contralateral. ATM: un cóndilo pivotea (lado de trabajo), el otro traslada." }
        ]},
        { tipo: "destacado", variante: "alerta", texto: "Durante el bruxismo estos movimientos se distorsionan: contracción sostenida sin alimento (apretamiento) o ciclos excéntricos repetitivos sin necesidad fisiológica (rechinamiento)." }
      ],
      imagePrompt: "Infographic-style diagram showing five mandibular movements, five small profile silhouettes of a human head with arrows indicating motion direction, clean flat design with teal and cyan, editorial medical style, white background, no text labels just arrows and silhouettes",
      imageAltText: "Diagrama de los cinco movimientos mandibulares"
    },
    {
      id: "10-fisiopatologia",
      orden: 10,
      eyebrow: "DEL COMPORTAMIENTO AL DAÑO",
      title: "Fisiopatología: ¿qué rompe el bruxismo?",
      resumen: "De fuerzas 20–40 kg a 250 kg sin estímulo. Cuatro etapas de daño progresivo.",
      cuerpo: [
        { tipo: "subtitulo", texto: "Masticación normal vs bruxismo" },
        { tipo: "lista", items: [
          { titulo: "Normal", texto: "Fuerza 20–40 kg · Duración: segundos · Frecuencia: con alimento" },
          { titulo: "Bruxismo", texto: "Fuerza: hasta 250 kg · Duración: minutos/horas · Frecuencia: sin estímulo" }
        ]},
        { tipo: "subtitulo", texto: "Cascada de daño en cuatro etapas" },
        { tipo: "lista", items: [
          { titulo: "1. Hiperactividad muscular", texto: "Contracción sostenida, isquemia local, acumulación de metabolitos" },
          { titulo: "2. Sobrecarga articular", texto: "Compresión del disco, desplazamiento, remodelación del cóndilo" },
          { titulo: "3. Daño dentario", texto: "Desgaste, microfracturas, hipersensibilidad, abfracciones" },
          { titulo: "4. Repercusión sistémica", texto: "Sensibilización central, cefalea, cadena cervical y postural" }
        ]}
      ],
      imagePrompt: "Conceptual medical illustration showing a cascade of four connected dominoes or layered discs representing progressive damage, teal to red color gradient, editorial infographic style, white background, sophisticated medical journal aesthetic, no text",
      imageAltText: "Cascada de cuatro etapas de daño del bruxismo"
    },
    {
      id: "11-mapa-dolor",
      orden: 11,
      eyebrow: "EL CUERPO ENTERO RECLAMA",
      title: "Mapa del dolor: impacto sistémico",
      resumen: "De la cabeza a la espalda, una constelación de síntomas que el paciente rara vez conecta.",
      cuerpo: [
        { tipo: "parrafo", texto: "El bruxismo genera una constelación de síntomas que bajan desde la cabeza hacia la espalda. Es común que el paciente consulte por un síntoma lejano sin sospechar el origen mandibular." },
        { tipo: "lista", items: [
          { titulo: "Cabeza", texto: "Cefalea tensional, cefalea matinal, migraña desencadenada, dolor retroorbitario" },
          { titulo: "Cavidad oral", texto: "Desgaste dentario, fracturas, hipersensibilidad, lengua festoneada, mejilla mordida" },
          { titulo: "Músculos masticatorios", texto: "Dolor preauricular, cansancio al morder, trismo matinal, hipertrofia" },
          { titulo: "ATM", texto: "Chasquido, crepitación, bloqueo, desviación a la apertura, dolor articular" },
          { titulo: "Cuello", texto: "Tortícolis, dolor en trapecio, rigidez cervical, vértigo cervicogénico, tinnitus" },
          { titulo: "Espalda y postura", texto: "Dolor dorsal alto, postura anterior de cabeza, cadena miofascial descendente" }
        ]}
      ],
      imagePrompt: "Human figure silhouette in profile, front-facing, with glowing teal dots and subtle red-orange accents marking pain zones on head, neck, jaw, shoulders and upper back, editorial medical infographic style, soft clean background, no text",
      imageAltText: "Silueta humana con zonas de dolor resaltadas"
    },
    {
      id: "12-orofacial",
      orden: 12,
      eyebrow: "IMPACTO LOCAL · DIENTES Y MÚSCULOS",
      title: "Dolor orofacial",
      resumen: "Desgaste, fracturas, trigger points e hipertrofia del masetero.",
      cuerpo: [
        { tipo: "subtitulo", texto: "Dientes y estructuras orales" },
        { tipo: "lista", items: [
          { titulo: "Desgaste oclusal", texto: "Atrición de cúspides, facetas brillantes, pérdida de dimensión vertical" },
          { titulo: "Fracturas y fisuras", texto: "Síndrome del diente fisurado, fracturas corono-radiculares" },
          { titulo: "Hipersensibilidad", texto: "Exposición dentinaria, dolor al frío y al dulce" },
          { titulo: "Abfracciones cervicales", texto: "Lesiones en forma de cuña en el cuello del diente" },
          { titulo: "Recesiones gingivales", texto: "Pérdida de soporte; riesgo de hipersensibilidad y movilidad" },
          { titulo: "Indentaciones linguales", texto: "Lengua festoneada y mordedura crónica de mejillas (línea alba)" }
        ]},
        { tipo: "subtitulo", texto: "Músculos masticatorios" },
        { tipo: "lista", items: [
          { titulo: "Mialgia localizada", texto: "Dolor a la palpación del masetero y del temporal anterior" },
          { titulo: "Trigger points", texto: "Nódulos hipersensibles que refieren dolor a oído, sien y dientes" },
          { titulo: "Hipertrofia del masetero", texto: "Rostro cuadrado, angulación mandibular prominente" },
          { titulo: "Trismo matinal", texto: "Limitación de la apertura al despertar, ceden con movimiento" },
          { titulo: "Fatiga masticatoria", texto: "Sensación de 'mandíbula cansada' al comer alimentos duros" },
          { titulo: "Dolor referido a pieza sana", texto: "Diagnóstico frecuentemente confundido con patología pulpar" }
        ]}
      ],
      imagePrompt: "Macro photography of a single human tooth showing occlusal wear facets and microfractures, dramatic editorial lighting, clinical precision, clean dark teal gradient background, dental medical photography style, high detail, no text",
      imageAltText: "Macro de diente con desgaste oclusal"
    },
    {
      id: "13-cefalea",
      orden: 13,
      eyebrow: "CONEXIÓN CRANEO-MASTICATORIA",
      title: "Dolor de cabeza: la queja más frecuente",
      resumen: "Cefalea matinal, opresiva, tipo 'banda'. Temporal y masetero como origen.",
      cuerpo: [
        { tipo: "subtitulo", texto: "Mecanismo fisiopatológico" },
        { tipo: "lista", items: [
          { titulo: "1. Sobrecarga del temporal", texto: "La contracción sostenida del temporal durante horas —especialmente nocturnas— produce dolor en bandas laterales y frontales." },
          { titulo: "2. Dolor referido del masetero", texto: "Los trigger points del masetero profundo refieren dolor a oído, sien y órbita, mimetizando cefalea primaria." },
          { titulo: "3. Sensibilización central", texto: "El núcleo trigeminal recibe aferencias de ATM, músculos masticatorios y cervicales altas (C1–C3). La estimulación crónica lo hipersensibiliza y baja el umbral del dolor." },
          { titulo: "4. Disparador de migraña", texto: "En pacientes predispuestos, el bruxismo actúa como trigger y aumenta frecuencia e intensidad de las crisis." }
        ]},
        { tipo: "subtitulo", texto: "Patrón clínico típico — cefalea del bruxista" },
        { tipo: "lista", items: [
          { titulo: "Horario", texto: "Matinal, aliviada en el día" },
          { titulo: "Ubicación", texto: "Temporal, bitemporal, frontal" },
          { titulo: "Calidad", texto: "Opresiva, tipo 'banda' o 'casco'" },
          { titulo: "Duración", texto: "Horas; recurrente varios días" },
          { titulo: "Gatillos", texto: "Estrés, mala higiene del sueño" }
        ]}
      ],
      imagePrompt: "Portrait of a person waking up with headache, hand pressed to temple, soft morning light, editorial medical photography, temple area subtly highlighted with warm amber glow, muted teal and cream background, emotionally restrained, no text",
      imageAltText: "Retrato de persona con cefalea matinal"
    },
    {
      id: "14-cervical",
      orden: 14,
      eyebrow: "DE LA MANDÍBULA AL CUELLO",
      title: "Dolor cervical: la cadena baja",
      resumen: "Trigémino y cervicales altas comparten núcleo sensitivo. La señal se amplifica.",
      cuerpo: [
        { tipo: "parrafo", texto: "El trigémino (V) comparte núcleo sensitivo con las raíces cervicales altas (C1–C3). La entrada dolorosa desde la ATM y los músculos masticatorios converge con la cervical y la amplifica." },
        { tipo: "lista", items: [
          { titulo: "Esternocleidomastoideo (ECM)", texto: "Función: flexión y rotación cervical. Implicación: dolor referido a frente, oído, área retroauricular. Frecuente en bruxistas con postura anterior de cabeza." },
          { titulo: "Trapecio superior", texto: "Función: elevación de la escápula. Implicación: rigidez del cuello, dolor en ángulo del cuello y región temporal. Trigger points muy comunes." },
          { titulo: "Suboccipitales", texto: "Función: extensión y rotación fina de C1–C2. Implicación: cefalea cervicogénica de base de cráneo, sensación de presión occipital, vértigo." },
          { titulo: "Escalenos y longus colli", texto: "Función: flexión lateral y profunda. Implicación: contribuyen a la postura anterior de cabeza característica del paciente crónico." }
        ]}
      ],
      imagePrompt: "Lateral view anatomical illustration of neck muscles, sternocleidomastoid and upper trapezius highlighted in warm muscle tones, clean scientific illustration style, teal accents on key connection points, ivory background, editorial medical textbook aesthetic, no text",
      imageAltText: "Vista lateral de músculos cervicales"
    },
    {
      id: "15-espalda-postura",
      orden: 15,
      eyebrow: "CADENA MIOFASCIAL DESCENDENTE",
      title: "Dolor de espalda y postura",
      resumen: "De la mandíbula a la pelvis. Cada 2,5 cm de postura anterior duplica la carga.",
      cuerpo: [
        { tipo: "subtitulo", texto: "De la mandíbula a la pelvis — la cadena descendente" },
        { tipo: "lista", items: [
          { titulo: "1. Mandíbula", texto: "Hiperactividad del masetero y temporal" },
          { titulo: "2. Cervical alta", texto: "Suboccipitales y ECM se tensan por compensación" },
          { titulo: "3. Cintura escapular", texto: "Trapecio superior eleva; elevador de la escápula se acorta" },
          { titulo: "4. Dorsal alto", texto: "Romboides y paravertebrales se sobrecargan" },
          { titulo: "5. Cadera y pelvis", texto: "Inclinación pélvica compensatoria, lumbar tensa" }
        ]},
        { tipo: "destacado", variante: "alerta", texto: "Postura anterior de cabeza: cada 2,5 cm de adelantamiento duplica la carga sobre la musculatura cervical posterior. El bruxismo crónico perpetúa esta postura." },
        { tipo: "destacado", variante: "info", texto: "Abordaje interdisciplinario: odontología + fisioterapia. Tratar solo el síntoma dentario deja la cadena cervical y postural activa. El manejo integral corta el ciclo en varios niveles simultáneamente." }
      ],
      imagePrompt: "Lateral full-body silhouette showing anterior head posture and descending muscular chain highlighted from jaw to pelvis, clean medical infographic style, teal gradient with red-orange accents on tension points, white background, editorial scientific aesthetic, no text",
      imageAltText: "Silueta lateral con cadena miofascial descendente"
    },
    {
      id: "16-signos-clinicos",
      orden: 16,
      eyebrow: "CÓMO LO DETECTAMOS",
      title: "Signos clínicos y diagnóstico",
      resumen: "Lo que el paciente reporta vs lo que el clínico observa.",
      cuerpo: [
        { tipo: "subtitulo", texto: "Lo que el paciente reporta" },
        { tipo: "lista", items: [
          { texto: "Despertar con dolor o cansancio mandibular" },
          { texto: "Cefalea matutina o tensión en sienes" },
          { texto: "Dolor de oído sin causa otológica" },
          { texto: "Pareja o acompañante escucha rechinar" },
          { texto: "Sensibilidad dental al frío o al dulce" },
          { texto: "Rigidez cervical y dorsal alta" },
          { texto: "Dificultad para abrir la boca al desayuno" }
        ]},
        { tipo: "subtitulo", texto: "Lo que el clínico observa" },
        { tipo: "lista", items: [
          { texto: "Facetas de desgaste en cúspides y bordes incisales" },
          { texto: "Masetero hipertrofiado a la palpación" },
          { texto: "Puntos dolorosos en temporal anterior" },
          { texto: "Chasquido o crepitación en ATM al abrir" },
          { texto: "Desviación mandibular a la apertura" },
          { texto: "Línea alba en mucosa yugal y lengua festoneada" },
          { texto: "Apertura limitada (<40 mm) o asimétrica" }
        ]}
      ],
      imagePrompt: "Two-panel editorial medical photograph split vertically, left side a patient in consultation describing symptoms, right side a clinician examining jaw with gloved hand, soft clinical lighting, muted teal and cream tones, professional sector salud aesthetic, no text",
      imageAltText: "Composición de paciente y clínico en evaluación"
    },
    {
      id: "17-covers-cierre",
      orden: 17,
      eyebrow: "ABORDAJE INTEGRAL — COVER'S",
      title: "Un problema multisistémico exige una solución integral",
      resumen: "MEDICAL COVER'S · SPORT COVER'S · SMOKOVER. Equipo médico dedicado.",
      cuerpo: [
        { tipo: "subtitulo", texto: "Las tres líneas COVER'S" },
        { tipo: "lista", items: [
          { titulo: "MEDICAL COVER'S", texto: "Bruxismo clínico — B2B con odontólogos" },
          { titulo: "SPORT COVER'S", texto: "Protección para deportistas — alto impacto" },
          { titulo: "SMOKOVER", texto: "Salud oral para fumadores — prevención" }
        ]},
        { tipo: "subtitulo", texto: "Equipo médico" },
        { tipo: "parrafo", texto: "Alejandra Jiménez Sierra — Founder & CEO, COVER'S. Dra. Paola Jiménez · Dr. Carlos Jiménez." },
        { tipo: "subtitulo", texto: "Contacto" },
        { tipo: "parrafo", texto: "www.my-covers.com · Instagram @covers_colombiaa · WhatsApp +57 312 808 3033" }
      ],
      imagePrompt: "Abstract elegant composition with three overlapping circular shapes in teal, cyan and deep petrol colors representing three product lines, clean minimal editorial design, soft gradients, white background, sophisticated healthcare brand aesthetic, no text",
      imageAltText: "Composición abstracta de las tres líneas COVER'S"
    }
  ] as Slide[]
};
