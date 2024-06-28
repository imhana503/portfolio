<script setup>
import { home } from '@/assets/common.json';

import { useStore } from '@/store/store';
const store = useStore();

</script>

<template>
  <section 
    :id="store.titletoLowerCase(home.sectionTitle)" 
    class="section">
    <div class="inner">
      <h2 class="sr-only">{{ home.sectionTitle }}</h2>
      <h3 class="title-h3">  
        {{ home.data.title }}
      </h3>
      <p class="text">{{ home.data.text }}</p>
      <a 
        class="button"
        @click="store.navigationAction(1)"
        :href="`javascript:;`">
        {{ home.data.link }}
      </a>
    </div>
    
  </section>
</template>  

<style scoped lang="scss">
.section {
  background-color:var(--color-black);
  color:var(--color-white);
  height:100vh;
  text-align: center;
  .inner {
    height: 100%;
  }
  .title-h3 {
    font-size:4rem;
    font-weight: 600;
    
  }
  .text {
    margin:var(--space-md) 0 var(--space-lg);
  }
  .button {
      display:inline-flex;
      padding:1.2rem 2rem;
      font-size:var(--font-sm);
      color:var(--color-white);
      border:1px solid var(--color-white);
      border-radius: 5rem;
      &:hover {
        background-color:var(--color-white);
        color:var(--color-dark);
      }
  }
  &.is-active {
    .title-h3 {
      animation: fade 1.5s forwards; 
    }
  }
}

@media (min-width: 768px){
  .title-h3 {
    font-size:6rem;
    line-height: 1;
  }
  .text {
    font-size:2rem;
  }
}

</style>
