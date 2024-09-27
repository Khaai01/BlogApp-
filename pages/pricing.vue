<script setup>
definePageMeta({
  layout: "landing",
});

const pricing = [
  {
    name: "Inicio Gratuito",
    price: "Gratis",
    popular: false,
    features: [
      "Acceso completo a artículos y tutoriales",
      "Participación en la comunidad de comentarios.",
      "Recibir boletines semanales con las noticias más relevantes.",
      "Acceso a recursos básicos y guías de inicio.",
    ],
    button: {
      text: "Iniciar",
      link: "/",
    },
  },
  {
    name: "Desarrollo Accesible",
    price: {
      monthly: "$15,000",
    },
    popular: true,
    features: [
      "Todo lo del Plan Personal.",
      "Acceso a contenido exclusivo y tutoriales avanzados.",
      "Descargas de recursos y plantillas premium.",
      "Descuentos en eventos y cursos en línea.",
      "Participación en foros y grupos de discusión privados.",
    ],
    button: {
      text: "Iniciar",
      link: "#",
    },
  },
  {
    name: "Proyectos Empresariales",
    price: "$50,000",
    popular: false,
    features: [
      "Todo lo del Plan Moderado.",
      "Consultorías personalizadas sobre proyectos tecnológicos.",
      "Acceso prioritario a seminarios y talleres en vivo.",
      "Análisis de tendencias y reportes personalizados.",
      "Oportunidades de colaboración y networking con otros profesionales.",
      "Soporte con expertos 24/7",
    ],
    button: {
      text: "Iniciar",
      link: "/",
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Impulsa tu conocimiento, transforma tu futuro</template>
      <template v-slot:desc
        >Descubre contenidos de tecnología y programación diseñados para todos los niveles,
         con recursos accesibles que te ayudarán a llevar tus habilidades al siguiente nivel.</template
      >
    </LandingSectionhead>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingPricing v-for="item of pricing" :plan="item" />
    </div>
  </LandingContainer>
</template>
