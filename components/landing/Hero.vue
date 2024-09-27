<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/OIG3.jpeg"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Tu guía en el mundo digital.
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Explora artículos, tutoriales y noticias sobre tecnología y programación. 
        Desde los fundamentos hasta las últimas tendencias, ¡aquí encontrarás todo lo que necesitas!
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="#"
          target="_blank"
          rel="noopener"
          >Empecemos</LandingLink
        >
      </div>
    </div>
  </main>
</template>
