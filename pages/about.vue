<script setup>
definePageMeta({
  layout: "landing",
});
const TeamImg1 = "https://source.unsplash.com/IF9TK5Uy-KI";
const TeamImg2 = "https://source.unsplash.com/iEEBWgY_6lA";
const TeamImg3 = "https://source.unsplash.com/ZHvM3XIOHoE";

const team = [
  {
    name: "Jesus Daniel Ruiz Roman",
    title: "CEO",
    avatar: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJK-9QldY1YjU0X98ONiS0GruBEpqYWu45w&s",
      width: 480,
      height: 560,
    },
  },
  {
    name: "Jose Durango",
    title: "Desarrollador Multimedia",
    avatar: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUTZuxvbNihmmM2R4rrngcRyPHQaXQ8amzg&s",
      width: 580,
      height: 580,
    },
  },
  {
    name: "Jefferson ",
    title: "Coordinador de Marketing",
    avatar: {
      src: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/06/zenitsu-looks-concerned-in-the-butterfly-estate.jpg",
      width: 580,
      height: 580,
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>¿Quienes somos?</template>
      <template v-slot:desc>Te invito a conocer a aquellos que hicieron todo esto posible</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Cambiando el Futuro Digital: Conoce a Nuestro Equipo
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Somos tres estudiantes de informática apasionados por la tecnología y la programación. 
        En TechBlog, unimos nuestras ideas y conocimientos para ofrecerte contenido valioso y 
        accesible, impulsando el crecimiento y la innovación en la comunidad tecnológica. 
        ¡Acompáñanos en este viaje hacia el futuro digital!
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
      <div v-for="item of team" class="group">
        <div class="w-full aspect-square">
          <img
            :src="item.avatar.src"
            :width="item.avatar.width"
            :height="item.avatar.height"
            format="avif"
            alt="Team"
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          />
        </div>

        <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">{{ item.name }}</h2>
          <h3 class="text-sm text-slate-500">{{ item.title }}</h3>
        </div>
      </div>
      <!-- {
        team.map((item) => (
          <div class="group">
            <div class="w-full aspect-square">
              <Image
                {...item.avatar}
                format="avif"
                alt="Team"
                class="w-full h-full object-cover rounded transition  group-hover:-translate-y-1 group-hover:shadow-xl"
              />
            </div>

            <div class="mt-4 text-center">
              <h2 class="text-lg text-gray-800"> {item.name}</h2>
              <h3 class="text-sm text-slate-500"> {item.title}</h3>
            </div>
          </div>
        ))
      } -->
    </div>
  </LandingContainer>
</template>
