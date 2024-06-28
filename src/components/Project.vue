<script setup>
import { ref } from 'vue';
import { project } from '@/assets/common.json';

import { useStore } from './../store/store';
import { storeToRefs } from 'pinia';
const store = useStore();

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';


</script>

<template>
  <section 
    class="section"  
    :id="store.titletoLowerCase(project.sectionTitle)"
  >
    <div class="inner">  
      <h2 class="title-h2">
        <a :href="`#${store.titletoLowerCase(project.sectionTitle)}`">
          <font-awesome-icon :icon="['fas', 'link']" class="ico"/>
          <span class="txt">{{ project.sectionTitle }}</span>
        </a>  
      </h2>

      <div class="project">
        <div class="project-item box" v-for="(item, idx) in project.data" :key="idx">
            <div class="pro-tit">
              <h3 class="tit">{{ item.title }}</h3>
              <p class="date">{{ item.date }}</p>
            </div>
            <div class="pro-cont">
              <carousel
                :transition="500"
              >
                <slide v-for="slide in item.imgUrl" :key="slide">
                  <img :src="store.imglink(slide)" alt="">
                </slide>
                <template #addons>
                  <navigation />
                </template>
              </carousel>
              <div class="pro-info">
                <p class="text" v-html="item.info"/>
                <dl>
                    <template v-for="(info, iIdx) in item.proInfo" :key="iIdx">
                        <dt>{{ info.keys }}</dt>
                        <dd>
                          <template v-if="info.keys === 'URL'">
                            <a 
                              href=""
                              v-for="(proInfo, proIdx) in info.values" 
                              :key="proIdx"
                              class="link">
                              {{proInfo}}
                            </a>
                          </template>
                          <template v-else>
                            <span 
                              v-for="(proInfo, proIdx) in info.values" 
                              :key="proIdx"
                              :class="info.keys === '기술스택' ? 'stack' : ''">
                              {{proInfo}}
                            </span>
                          </template>
                        </dd>
                    </template>
                </dl>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.carousel__prev, 
.carousel__next {
  width:5rem;
  height:5rem;
  font-size:8rem;
  color:var(--color-light-blue);  
}

.carousel__prev {
  left:-4rem;
}

.carousel__next {
  right:-4rem;
}

.carousel.is-hover .carousel__prev,
.carousel.is-hover .carousel__next  {
  color:var(--color-light-blue);  
}

</style>
<style scoped lang="scss">
.section {
  background-color:var(--color-light-blue);

  .title-h2  {
    .ico,
    .txt {
        color:var(--color-white);
    }
  }
  .inner {
    padding-inline:var(--space-md);   
  }
  .project-item {
    .pro-tit {
      text-align: center;
    }
    .tit {
      font-size:2rem;
    }
    .date {
      font-size:1.2rem;
    }
    .text {
      font-size:var(--font-xs);
    }
    .carousel {
      margin:var(--space-md)
    }
    .link {
      color:var(--color-light-blue)
    }
    .pro-info {
      margin-top:2rem;
      padding-top:2rem;
      border-top:1px solid var(--color-gray);
      dl {
        display:flex;
        flex-wrap: wrap;
        font-size:1.3rem;
        dt {
          width: 20%;
          margin-top:1rem;
        }
        dd {
          width:80%;
          margin-top:1rem;
        }
      }
    } 
    .stack {
      display:inline-flex;
      padding:.2rem .5rem;
      margin:0 .5rem .5rem 0;
      border-radius:var(--radius-lg);
      border:1px solid var(--color-gray);
    }
    &~.project-item{
      margin-top:var(--space-md);
    }
  }
}

@media (min-width: 768px){
  .section {
    .inner {
      padding-inline:7rem;
    }
    .project-item {
      .tit {
        font-size:var(--font-md);
      }
      .date {
        font-size:var(--font-xs);
      }
      .text {
        font-size:var(--font-sm);
      }
      .pro-cont {
        display:flex;       
        .carousel,
        .pro-info {
          flex:1;
        }
      }
      .carousel{
        margin-right:6rem;
      }
      .pro-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border:none;
      }
     
      & + .project-item {
        margin-top:var(--space-xl);
      }
    }
  }
}
</style>
