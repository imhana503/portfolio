import { defineStore } from 'pinia';
import { header } from '@/assets/common.json';

export const useStore = defineStore('main', {  
    state:()=>({
        toggle:false,
        bgNavigation:true,
    }),
    actions:{  
        navigationScroll(currentScroll){
            this.scrollMove('scroll', currentScroll);
       },
        navigationAction(idx){
            this.naviSectReset();
            document.querySelectorAll('.navbar li')[idx].classList.add('is-active');

            this.scrollMove('navi', idx);            
        },
        scrollMove(name, value ){
            const navbarLinks = document.querySelectorAll('.navbar li');
            const sections = document.querySelectorAll('.section');

            let secPos = [];
            sections.forEach(function(section){
                secPos.push(section.offsetTop);
            });

            if( name === 'navi' ){
                if( value === 0 ){
                    window.scrollTo({ top:secPos[0] });
                } else if( value === 1 ){
                    window.scrollTo({ top:secPos[1] + 5 });
                } else if( value === 2 ){
                    window.scrollTo({ top:secPos[2] + 5 });
                } else if( value === 3 ){
                    window.scrollTo({ top:secPos[3] + 5 });
                } else if( value === 4 ){
                    window.scrollTo({ top:secPos[4] + 5 });
                } else if( value === 5 ){
                    window.scrollTo({ top:secPos[5] + 5 });
                }
                return;
            }

            if( name === 'scroll' ){
                secPos.map((item, inx)=>{
                    if( (value >= secPos[0] && value < secPos[1]) || value === 0 ){
                        this.naviSectReset();                   
                        sections[0].classList.add('is-active');
                        navbarLinks[0].classList.add('is-active');
                    } else if( value >= secPos[1] && value < secPos[2] ){
                        this.naviSectReset();
                        sections[1].classList.add('is-active');
                        navbarLinks[1].classList.add('is-active');
                    } else if( value >= secPos[2] && value < secPos[3] ){
                        this.naviSectReset();
                        sections[2].classList.add('is-active');
                        navbarLinks[2].classList.add('is-active');
                    } else if( value >= secPos[3] && value < secPos[4] ){
                        this.naviSectReset();
                        sections[3].classList.add('is-active');
                        navbarLinks[3].classList.add('is-active');
                    } else if( value >= secPos[4] && value < secPos[5] ){
                        this.naviSectReset();
                        sections[4].classList.add('is-active');
                        navbarLinks[4].classList.add('is-active');
                    } else if( value >= secPos[5] ){
                        this.naviSectReset();
                        sections[5].classList.add('is-active');
                        navbarLinks[5].classList.add('is-active');
                    } 
                });
                return;
            }   
        },
        naviSectReset(){
            document.querySelectorAll('.navbar li').forEach(function(_this){
                _this.classList.remove('is-active');
            });
            document.querySelectorAll('.section').forEach(function(_this){
                _this.classList.remove('is-active');
            });
        },
        headerBg(width){
            if( width >= 768 ){
                this.bgNavigation = true;
            } else {  
                this.bgNavigation = false;
            }
        },
        //타이틀 소문자
        titletoLowerCase(title){
            return title.toLowerCase().split(' ').join('');
        },
        //이미지 url
        imglink(url){
            if (url !== '') return url = `/src/assets/images/${url}`;
        },
    }  
})