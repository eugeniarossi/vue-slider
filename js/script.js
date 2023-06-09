'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            active : 0,
            sliderOver: false,
            slides : [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            titles : ['Spiderman', 'Ratchet & Clank', 'Fortnite', 'Stray', 'Avengers'],
            pContent : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
        }
    },
    methods: {
        prevImg() {
            this.active--;
            if (this.active < 0){
                this.active = this.slides.length - 1;
            }
        },
        nextImg() { 
            this.active++;   
            if (this.active >= this.slides.length) {
                this.active = 0;
            }
        },
        selectImage(index) {
            this.active = index;
        },
        stopAutoplay() {
            this.sliderOver = true;
        },
        autoplay() {
            this.sliderOver = false;
        }
    },
    mounted() {
        setInterval(() => {
            if(this.sliderOver === false) {
                this.nextImg();
            }
        }, 3000);
    }
}).mount('#app');