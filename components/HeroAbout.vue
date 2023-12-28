<template>
  <div
    class="grid w-full h-full grid-cols-5 grid-rows-5 gap-4 text-light md:flex md:flex-col md:gap-3"
  >
    <div
      class="relative col-span-2 row-span-3 overflow-hidden rounded cursor-pointer overlay-activator bg-third md:col-span-5 md:row-span-2 md:row-start-3 md:aspect-video"
    >
      <img
        src="../assets/images/me.jpg"
        alt="Reading"
        class="absolute top-0 left-0 object-cover w-full h-full"
      />
      <div
        class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay"
      >
        <div
          class="flex items-start justify-end flex-col w-full h-full p-8 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.75)] md:p-3 md:row-start-1"
        >
          <h6 class="text-lg font-bold">What do i enjoy doing?</h6>
          <p class="text-base font-light md:hidden">
            I love reading, especially esoteric novels. I also play a lot of
            video games, with a particular fondness for strategy games.
            Additionally, I enjoy board games like chess and Cluedo. For sports,
            I mainly play basketball, but I also enjoy soccer and occasionally
            volleyball.
          </p>
          <p class="hidden text-base font-light md:inline">
            Reading, Video Games, Chess, Basketball, Football ...
          </p>
        </div>
      </div>
    </div>
    <div
      class="relative col-span-3 row-span-3 p-8 rounded bg-third md:col-span-5 md:row-span-2 md:aspect-auto md:p-3"
    >
      <div
        class="flex flex-col items-start justify-center w-full h-full md:justify-start"
      >
        <h1 class="mb-2 text-6xl font-bold md:text-3xl">
          Rakotobe Alan Razafinimanana
        </h1>
        <p class="text-xl font-thin text-justify md:!text-base">
          I am {{ new Date().getFullYear() - 2002 }} years old and I live in
          Antananarivo, Madagascar. I am a full-stack developer with a strong
          focus on frontend development.
        </p>
        <p class="text-xl font-thin text-justify md:hidden">
          <span class="font-bold">Hover</span> over the images around this section to learn more about me.
        </p>
      </div>
    </div>
    <div
      class="relative col-span-2 row-span-2 overflow-hidden rounded cursor-pointer bg-third md:col-span-5 md:row-span-2 overlay-activator"
    >
      <img
        src="../assets/images/travel.jpg"
        alt="Anakao Dunes"
        class="absolute top-0 left-0 object-cover w-full h-full md:relative"
      />
      <div
        class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay md:relative"
      >
        <div
          class="flex items-start justify-end flex-col w-full h-full p-8 bg-gradient-to-b md:to-transparent from-transparent to-[rgba(0,0,0,0.75)] md:p-3"
        >
          <h6 class="text-lg font-bold">Explore the world.</h6>
          <p class="text-base font-light">
            Traveling is my passion. Exploring Madagascar has not only gifted me
            with captivating photos but has also been a profound journey of
            self-discovery. Each trip enriches my understanding of the world and
            deepens my appreciation for life's moments.
          </p>
        </div>
      </div>
    </div>
    <div
      class="relative col-span-1 row-span-2 overflow-hidden rounded cursor-pointer bg-third md:col-span-5 md:row-span-2 overlay-activator"
    >
      <img
        src="../assets/images/infp.jpg"
        alt="My MBTI"
        class="absolute top-0 left-0 object-cover w-full h-full md:relative"
      />
      <div
        class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay md:relative"
      >
        <div
          class="flex items-start justify-end flex-col w-full h-full p-8 bg-gradient-to-b md:to-transparent from-transparent to-[rgba(0,0,0,0.75)] md:p-3"
        >
          <h6 class="text-lg font-bold">In case you ask my MBTI</h6>
          <p class="text-base font-light">I'm Mediator (INFP)</p>
        </div>
      </div>
    </div>
    <div
      class="relative col-span-2 row-span-2 overflow-hidden rounded cursor-pointer bg-third md:col-span-5 md:h-auto md:row-span-3 overlay-activator"
    >
      <img
        src="../assets/images/jw.jpg"
        class="absolute top-0 left-0 object-cover w-full h-full md:relative"
      />
      <NuxtLink
        class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay md:relative"
        to="/"
      >
        <div
          class="flex items-start justify-end flex-col w-full h-full p-8 bg-gradient-to-b md:to-transparent from-transparent to-[rgba(0,0,0,0.75)] md:p-3"
        >
          <h6 class="text-lg font-bold">Spiritual Life.</h6>
          <p class="text-base font-light">
            My activities within the Jehovah's Witnesses allow me to enhance my
            communication skills and work as a team. My principles require me to
            remain just and speak the truth in all matters.
          </p>
        </div></NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
.overlay-activator:hover .overlay {
  transform: translateY(0);
}
</style>
