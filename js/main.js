const { createApp } = Vue

createApp({

    data() {
        return {
            
            images: [
                "./img/01.webp",
                "./img/02.webp",
                "./img/03.webp",
                "./img/04.webp",
                "./img/05.webp",
            ],
            
            activeImage: 0,
            
        }
    },
    methods: {
        checkImageVisibility(indice) {
            return (indice == this.activeImage) ? 'active' : '';
        },
        
        next() {
            this.activeImage++;
        },

        back() {
            this.activeImage--;
        },

        mostraSlide(indice) {
            this.activeImage = indice;
        }

    },
    mounted() {
       
    }

}).mount('#app')