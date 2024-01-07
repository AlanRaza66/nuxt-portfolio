<template>
  <div class="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-screen h-screen bg-third">
    <div class="loader"></div>
    <div class="loaderText"></div>
  </div>
</template>
<style scoped>/* HTML: <div class="loader"></div> */
.loaderText {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  clip-path: inset(0 100% 0 0);
  animation: l5 2s steps(11) infinite;
}
.loaderText:before {
  content:"Loading..."
}
@keyframes l5 {to{clip-path: inset(0 -1ch 0 0)}}
.loader {
  width: 100px;
  aspect-ratio: 1;
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  background: white;
  filter: blur(5px) contrast(10) hue-rotate(300deg);
  mix-blend-mode: darken;
}
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  width: 40px;
  height: 40px;
  background: rgb(0, 0, 0);
  animation: l7 2s infinite;
}
.loader:after {
  animation-delay: -1s;
}
@keyframes l7 {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(100%, 0);
  }
  50% {
    transform: translate(100%, 100%);
  }
  75% {
    transform: translate(0, 100%);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
