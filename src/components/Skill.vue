<script setup>
import { skiil } from '@/assets/common.json';

import { useStore } from '@/store/store';
import { storeToRefs } from 'pinia';
const store = useStore();
const { imglink } = storeToRefs(store);
</script>

<template>
  <section 
    class="section"  
    :id="store.titletoLowerCase(skiil.sectionTitle)"
  >
    <div class="inner">
      <h2 class="title-h2">
        <a :href="`#${store.titletoLowerCase(skiil.sectionTitle)}`">
          <font-awesome-icon :icon="['fas', 'link']" class="ico"/>
          <span class="txt">{{ skiil.sectionTitle }}</span>
        </a>  
      </h2>
     
      <ul class="skill-list">  
        <li v-for="item in skiil.data">
          <h3>{{ item.title }}</h3>
          <img :src="store.imglink(item.imgUrl)" :alt="item.title">
          
        </li>
      </ul>  
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  background:var(--color-secondary);
  .skill-list {
    li {
      display:flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      text-align:center;
      transition: all .5s;
      &~li {
        margin-top:var(--space-lg);
      }
      &:hover {
        transform: translateY(-2rem);
      }
    }
    h3 {
      margin-bottom:var(--space-md);
      font-size:var(--font-md);
    }
    img {
      width:24rem;
    }
  }
}

@media (min-width: 768px){
  .section {
    .skill-list {
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      gap:var(--space-lg);
      li {
        justify-content: flex-start;
      }
      li~li {
        margin-top:0;
      }
      h3 {
        font-size:var(--font-sm);
      }
      img {
        width:15rem;
      }
    }
  }
}
</style>
