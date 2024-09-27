<script setup>
const features = [
  {
    title: "Contenido Actualizado",
    description:
      "Mantente al día con las últimas tendencias y noticias en tecnología y programación, con artículos nuevos cada semana.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Tutoriales Prácticos",
    description:
      "Aprende a tu ritmo con tutoriales detallados que cubren desde lo básico hasta técnicas avanzadas en diversos lenguajes de programación.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Precios accesibles",
    description:
      "TechBlog se dedica a ofrecer contenido y recursos de calidad a precios accesibles, garantizando que el conocimiento esté al alcance de todos. ",
    icon: "bx:bxs-data",
  },
  {
    title: "Recursos Adicionales",
    description:
      "Accede a una variedad de recursos, incluyendo listas de herramientas, libros recomendados y enlaces a cursos en línea, todos gratuitos para mejorar tus habilidades.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Reseñas de Gadgets",
    description:
      "Descubre reseñas imparciales y análisis de los últimos dispositivos tecnológicos, ayudándote a tomar decisiones informadas de compra.",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Comunidad Interactiva",
    description:
      "Únete a una comunidad apasionada donde puedes compartir ideas, hacer preguntas y colaborar con otros entusiastas, fomentando el aprendizaje mutuo sin intereses comerciales.",
    icon: "bx:bxs-user",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Todo lo que necesitar para entrar en la Web
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Te proporcionamos tutoriales paso a paso, consejos de expertos y recursos
       esenciales para que lleves tu proyecto digital al siguiente nivel. ¡Empieza hoy mismo y 
       transforma tus ideas en una realidad en línea!
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
