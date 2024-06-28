<script setup>
import { career } from '@/assets/common.json';

import { useStore } from './../store/store';
const store = useStore();

</script>

<template>
  <section 
    class="section"  
    :id="store.titletoLowerCase(career.sectionTitle)"
  >
    <div class="inner">
      <h2 class="title-h2">
        <a :href="`#${store.titletoLowerCase(career.sectionTitle)}`">
          <font-awesome-icon :icon="['fas', 'link']" class="ico"/>
          <span class="txt">{{ career.sectionTitle }}</span>
        </a>  
      </h2>

      <div class="career">
        <div class="career-item" v-for="(item, idx) in career.data" :key="idx">
          <div class="imgs">
            <span><img :src="store.imglink(item.imgUrl)" :alt="item.title"></span>
          </div>
          <div class="infos">
            <div class="work">
              <h3 class="tit">{{ item.title }}</h3>
              <span class="date">{{ item.date }}</span>
              <ul class="list">
                <li v-for="(list,lidx) in item.desc" :key="lidx">
                  {{ list }}
                </li>
              </ul>
            </div>
            <div class="work project" v-for="(works, widx) in item.works" :key="widx">
               <h3 class="tit">{{ works.proTitle }}</h3>
                <span class="date">{{ works.proDate }}</span>
                <ul class="bulit">
                  <li v-for="(proWork,proIdx) in works.proDesc" :key="proIdx">
                    {{ proWork }}
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  background-color:var(--color-light-gray);
  .inner {
    padding-inline: var(--space-md);
  }
  .career {
    &-item {
      display:flex;
      flex-direction: column;
      justify-content: center;
      gap:var(--space-xxl);
      font-size:var(--font-sm);
    }  
    .tit {
      font-size:var(--font-md);
    }
    .date {
      display:block;
      margin:1rem 0;
      color:var(--color-dark-gray)
    }
    .list li+li {
      margin-top:var(--space-sm)
    }
    .project {
      display:flex;
      flex-direction: column;
      .tit {
        font-size:var(--font-sm);
        &:before {
          content:"";
          width:.4rem;
          height:1.3rem;
          display:inline-block;
          background-color:var(--color-dark);
          margin-right:var(--space-sm);
          vertical-align: middle;

        }
      }
      .date {
        margin:.5rem 0;
        font-size:var(--font-xs);
      }    
      & ~ .project {
        margin-top:2rem;
      } 
    }
    .work:first-child + .work {
      margin-top:var(--space-lg);
      padding-top:var(--space-lg);
      border-top:1px solid var(--color-gray);
    }
  }
  .imgs {
    display:flex;
    justify-content: center;
    & > span {
      display:inline-flex;
      justify-content: center;
      align-items: center;
      width:23rem;
      height:23rem;
      background-color:var(--color-white);
      border:1px solid var(--color-gray);
      border-radius: var(--radius-100);
    }
    img {
      width:12.6rem;
    }
  }
  .infos {
    margin-top:var(--space-lg);
    padding-top:var(--space-lg);
    border-top:1px solid var(--color-gray);
  }
}

@media (min-width: 768px){
  .section {
    .inner {
      padding-inline: var(--space-xxl);
    }
    .career-item {
      flex-direction: row;
      justify-content: flex-start;
      gap:0;
      .infos {
        flex:1;
        margin:0 0 0 var(--space-xl);
        padding:0 0 0 var(--space-xl);
        border:none;
        border-left:1px solid var(--color-gray)
      }
      & ~ .career-item {
        margin-top:var(--space-xxl)
      }

      .work:first-child + .work {
        margin-top:var(--space-md);
        padding-top:var(--space-md);
      
      }
    }
    .bulit {
      display:flex;
      &>li~li {
        margin-top:0;
      }
    }
    .imgs > span {
      width:20rem;
      height:20rem;
    }
  }
}
</style>
