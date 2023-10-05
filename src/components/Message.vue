<template>
  <div class="flex flex-row gap-6 mx-6 hover:scale-105 active:scale-90 transition-transform cursor-pointer select-none"
    @click="randomize">
    <img :src="image" alt="Imagen que saluda" height="150" class="char-image" />
    <div class="speech-booble p-3 md:p-5 shadow-md bg-rose-100">
      <p class="text-rose-950 text-xl md:text-2xl font-semibold">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent } from 'vue';
import { RANDOM_TEXTS } from '../config';


const images: string[] = ["/facu.png", "/joel.png", "/fabri.png", "/uriel.png"];
const texts = RANDOM_TEXTS

function getRandom<T>(array: T[]): T {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

export default defineComponent({
  data() {
    return {
      image: getRandom(images),
      text: getRandom(texts),
    };
  },
  methods: {
    randomize() {
      this.image = getRandom(images);
      this.text = getRandom(texts);
    },
  },
});
</script>

<style>
.char-image {
  height: 50px;
  width: auto;
}

.speech-booble {
  width: 100%;
  height: auto;
  border-radius: 10px;
  position: relative;
}

.speech-booble::before {
  content: "";
  position: absolute;
  top: 1rem;
  left: -1rem;
  transform: rotate(270deg);
  border: 0.75rem solid transparent;
  border-top: none;
  border-bottom-color: #ffe4e6;
  filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
}

@media (min-width: 768px) {
  .char-image {
    height: 100px;
    width: auto;
  }

  .speech-booble {
    height: 100px;
  }

  .speech-booble::before {
    top: 2rem;
  }
}
</style>