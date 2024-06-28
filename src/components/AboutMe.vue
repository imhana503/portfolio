<script setup>
import { aboutMe } from '@/assets/common.json';

import { useStore } from '@/store/store';
const store = useStore();

</script>

<template> 
  <section 
    :id="store.titletoLowerCase(aboutMe.sectionTitle)"
    class="section"
  >
    <div class="inner">
      <h2 class="title-h2">
        <a :href="`#${store.titletoLowerCase(aboutMe.sectionTitle)}`">
          <font-awesome-icon :icon="['fas', 'link']" class="ico"/>
          <span class="txt">{{ aboutMe.sectionTitle }}</span>
        </a>
      </h2>

      <ul class="about-list">
        <li v-for="(item, key) in aboutMe.data" :key="key">
          <p class="tit">{{item.title}}</p>
          <p class="text" v-for="(items, keys) in item.value" :key="keys">
            {{ items }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>  

<style scoped lang="scss">
.section {
  .about-list {
    text-align: center;
    .tit {
      font-size:2.8rem;
      font-weight: 600;
    }
    .text {
      font-size:2rem;
    }
    li~li {
      margin-top:var(--space-xl)
    }
  }
}


@media (min-width: 768px){
  .section {
    .about-list {
      width:100%;
      display:flex;
      gap:3rem;
      padding-top:4rem;
      li {
        flex:1
      }
      li~li {  
        margin-top:0;
      }
    }
  }
  
}
</style>
