<script setup>
import { onMounted } from 'vue';
import { useStore } from '@/store/store';
import { storeToRefs } from 'pinia';

const store = useStore();
const { navigationScroll } = storeToRefs(store);

/* components */
import Header from '@/components/Header.vue';
import Home from '@/components/Home.vue';
import AboutMe from '@/components/AboutMe.vue';
import Skill from '@/components/Skill.vue';
import Archiving from '@/components/Archiving.vue';
import Project from '@/components/Project.vue';
import Career from '@/components/Career.vue';


onMounted(()=>{
  store.navigationScroll(window.scrollY);
  window.addEventListener('scroll', function(){
    store.navigationScroll(window.scrollY);
  });  
})
</script>

<template>  
  <Header/>
  <Home/>
  <AboutMe/>
  <Skill/>
  <Archiving/>
  <Project/>
  <Career/>
</template>

<style scoped>

</style>
  