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
            if(this.activeImage > 4) {
                this.activeImage = 0
            }
        },

        back() {
            this.activeImage--;
            if(this.activeImage < 0) {
                this.activeImage = 4
            }

        },

        mostraSlide(indice) {
            this.activeImage = indice;
        }

    },
    mounted() {
       
    }

}).mount('#app')