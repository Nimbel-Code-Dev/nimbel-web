// Secciones de la home que de momento solo existen en español.
// Fuera de es.ts para no romper la paridad de claves con en.ts (ver docs/seo/decisiones.md).
export const homeEs = {
  audience: {
    title: "¿Para quién es?",
    intro:
      "Hacemos software a medida para empresas que necesitan tecnología propia, pero no quieren convertirse en una empresa tecnológica. Si te reconoces en alguna de estas situaciones, podemos ayudarte.",
    items: [
      {
        title: "Tu empresa funciona con Excel, correos y herramientas que no se hablan entre sí",
        text: "La información está repartida, los datos se copian a mano y nadie tiene la foto completa. Reunimos tus procesos en una sola herramienta, pensada para cómo trabajas.",
      },
      {
        title: "Necesitas una aplicación propia y no quieres montar un equipo técnico",
        text: "Quieres una app o una plataforma para tus clientes o tu equipo, sin contratar programadores ni gestionar un departamento de tecnología. Nosotros somos ese equipo.",
      },
      {
        title: "Tu proveedor anterior desapareció o el proyecto quedó a medias",
        text: 'Tienes código que nadie mantiene o un desarrollo que no termina de funcionar. Lo revisamos y seguimos desde donde esté: es nuestro servicio de <a href="#services">Rescate e integración</a>.',
      },
      {
        title: "Quieres aplicar IA en tu operativa, pero no sabes por dónde empezar",
        text: "Te ayudamos a ver dónde aporta de verdad y la integramos con tus sistemas, paso a paso y sin experimentos.",
      },
    ],
  },
  process: {
    title: "Cómo trabajamos",
    intro:
      "Tú te centras en tu negocio; nosotros nos ocupamos de la tecnología. Así es un proyecto de desarrollo de software a medida con Nimbel Code.",
    steps: [
      {
        title: "Conversación inicial",
        text: "Nos cuentas qué necesitas y qué problema quieres resolver. Sin tecnicismos: hablamos de tu negocio, no de tecnología.",
      },
      {
        title: "Análisis de cómo trabajas",
        text: "Estudiamos tus procesos, tus herramientas y a las personas que van a usar el software. Así construimos lo que necesitas, no lo que encaja en una plantilla.",
      },
      {
        title: "Propuesta por fases",
        text: "Recibes una propuesta con el alcance y el presupuesto cerrado de cada fase. Sabes qué vas a tener y cuánto cuesta antes de empezar.",
      },
      {
        title: "Desarrollo con entregas frecuentes",
        text: "Ves avances reales durante todo el proyecto y nos dices qué ajustar. Además, registramos hora a hora a qué dedicamos el tiempo y cómo se consume el presupuesto, para que entiendas qué partes cuestan más y cuáles menos.",
      },
      {
        title: "Mantenimiento y soporte",
        text: "Cuando el software ya está en marcha, seguimos a tu lado: lo mantenemos, lo hacemos evolucionar y estamos cuando algo falla.",
      },
    ],
  },
  // Texto plano: el FAQPage del JSON-LD usa estas mismas cadenas
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        question:
          "¿Qué es el desarrollo de software a medida y en qué se diferencia de un programa estándar?",
        answer:
          "El desarrollo de software a medida consiste en crear una herramienta pensada para tu empresa: tus procesos, tus datos y tu forma de trabajar. Un programa estándar es igual para todos y te obliga a adaptarte a él, normalmente pagando licencias. Con el software a medida ocurre al revés: la herramienta se adapta a ti y crece cuando tu negocio lo necesita.",
      },
      {
        question: "¿Cuánto cuesta un software a medida?",
        answer:
          "Depende del alcance: no cuesta lo mismo una herramienta interna sencilla que una plataforma con app móvil e integraciones. Por eso trabajamos por fases, con presupuesto cerrado en cada una. Una primera fase suele partir de 10.000 €, y la mayoría de nuestros clientes empezaron así antes de seguir evolucionando su software con nosotros. Pronto publicaremos una página con más detalle sobre el precio.",
      },
      {
        question: "¿Cuánto tiempo se tarda?",
        answer:
          "Depende del alcance y de cuántas fases tenga el proyecto. En la propuesta te indicamos el plazo de cada fase. Y como hacemos entregas frecuentes, no tienes que esperar al final para ver resultados: ves el software crecer durante todo el proyecto.",
      },
      {
        question: "¿El software es mío?",
        answer:
          "Sí. Lo que desarrollamos para ti es tuyo desde el primer día: el código, los datos y el control. No pagas licencias por usarlo ni dependes de nosotros para seguir adelante. Si algún día prefieres que lo mantenga otro equipo, puedes hacerlo. Por eso trabajamos sin plantillas cerradas ni plataformas que te aten.",
      },
      {
        question: "¿Qué pasa si mi proveedor actual desaparece o el proyecto está a medias?",
        answer:
          "Tiene solución. Revisamos lo que hay (código, servidores, accesos y documentación) y te explicamos en qué estado está, sin tecnicismos. A partir de ahí seguimos desde donde esté: lo estabilizamos, completamos lo que falta y lo convertimos en algo que funciona de verdad. También si se generó con IA y funciona a medias.",
      },
      {
        question: "¿Trabajáis con empresas de Barcelona?",
        answer:
          "Sí. Entre nuestros clientes en Barcelona están el Hospital Clínic de Barcelona y StartUB, de la Universitat de Barcelona. Visitamos Barcelona con frecuencia y tenemos equipo allí, así que también podemos reunirnos en persona. El resto del equipo trabaja en remoto desde Sevilla, Córdoba (Argentina) e Irlanda, y damos servicio a todo España y a Latinoamérica.",
      },
    ],
  },
} as const;
