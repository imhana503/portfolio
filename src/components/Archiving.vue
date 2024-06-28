<script setup>
import { archiving } from '@/assets/common.json';

import { useStore } from '@/store/store';
import { storeToRefs } from 'pinia';
const store = useStore();
const { imglink } = storeToRefs(store);


</script>

<template>
  <section 
    class="section"  
    :id="store.titletoLowerCase(archiving.sectionTitle)"
  >
    <div class="inner">
      <h2 class="title-h2">
        <a :href="`#${store.titletoLowerCase(archiving.sectionTitle)}`">
          <font-awesome-icon :icon="['fas', 'link']" class="ico"/>
          <span class="txt">{{ archiving.sectionTitle }}</span>
        </a>  
      </h2>
    
      <ul class="archiving-list">
        <li v-for="(item, idx) in archiving.data" :key="idx" class="box">
          <h3 class="title-h3">{{ item.title }}</h3>
          <a :href="item.url" title="새창열림" class="link" target="_blank">{{ item.url }}</a>
          <ul class="bulit">
            <li v-for="desc in item.desc">{{ desc }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  background-color:var(--color-dark);
  padding-inline:var(--space-lg);
  .title-h2 a {
    color:var(--color-white)  
  }
  .archiving-list {
    display:flex;
    flex-direction: column;
    gap:var(--space-lg);
    width:100%;
    &>li {
      flex:1;
    }
    .box:hover {
      transform: scale3d(1.1, 1.1, 1.1);
    }
    .link {
      font-size:1.4rem;
      color:var(--color-primary);
    }
    .title-h3 {
      margin-bottom:1rem;
      line-height: 1;
      font-size:var(--font-md);
    }
  }  
}

@media (min-width: 768px){
  .section {
    padding-inline:var(--space-lg);
   
    .archiving-list {
      flex-direction: row;
    }
  }
}
</style>
