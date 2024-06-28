<script setup>
import { onMounted } from 'vue';
import { header } from '@/assets/common.json';

import { useStore } from './../store/store';
import { storeToRefs } from 'pinia';

const store = useStore();
const { toggle, bgNavigation } = storeToRefs(store);

onMounted(()=>{
    store.headerBg(window.innerWidth)
    window.addEventListener('resize',function(){
        store.headerBg(window.innerWidth)
    });
})
</script>

<template>
  <header 
    id="header" 
    :class="{ 'is-active' : toggle, 'bg-nav' : bgNavigation }">   
    <nav class="navbar" 
        role="navigation" 
        aria-labelledby="toggleNav" 
        :aria-hidden="!toggle">
        <ul>
            <li 
                v-for="(item, idx) in header.menu.nav" 
                :key="idx">
                <a 
                    @click="store.navigationAction(idx)"
                    :href="`javascript:;`">{{ item }}</a>
            </li>
        </ul>
    </nav>
    <button 
        type="button"            
        id="toggleNav"  
        class="btn-nav"
        aria-controls="navigation"
        :aria-expanded="toggle"
        @click="toggle = !toggle">
        <font-awesome-icon :icon="['fas', 'bars']" class="icon" v-if="!toggle" />
        <font-awesome-icon :icon="['fas', 'xmark']" class="icon" v-if="toggle"/>
        <span class="sr-only">메뉴 열기/닫기</span>
    </button>
  </header>
</template>

<style scoped lang="scss">
#header {
    display:flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    width:100%;
    top:0;
    background-color:transparent;
    z-index:2;
    a {
        color:var(--color-light)  
    }
    .btn-nav {
        width:4.8rem;
        height:4.8rem;
        margin-right:2rem;
        background-color:var(--color-primary);
        .icon {
            font-size:3rem;
            color:var(--color-light)
        }
       
    }
    .navbar {
        position: absolute;
        top:6rem;
        right:0;   
        left:0;
        margin:0 var(--space-md);
        padding:var(--space-md);
        background:var(--color-gray);   
        font-size:1.8rem;
        color:var(--color-light);
        display: none;
        z-index:2;
       
        li~li {
            margin-top:var(--space-sm);
        }
        a {
            display: block;
        }
        li.is-active {
            a {
                color:var(--color-primary)
            }
        }
    }
    &.is-active {
        .navbar {
            display:block;
        }
    }
    &.bg-nav {
        background-color:#c9c9c9
    }
}

@media (min-width: 768px){
    #header{
        position: sticky;
        justify-content: center;
        .btn-nav {
            display:none;
        }
        .navbar {
            display: flex;
            position: inherit;
            background: transparent;
            font-size:2rem;
            > ul {
                display:flex;
            }
            li ~ li {
                margin:0 0 0 var(--space-sm);
            }
        }
    }
   
}
</style>
