
//step 1: printing using data the message to screen
const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'title via vue',
            imgLink: 'https://picsum.photos/200/400',
            flip: 'flippable'

        };
    },
    methods: {
        newImage() {

            console.time('loadpic')
            console.log('hi')
            //using a flip flop-like method to ensure img refresh
            this.flip = this.flip === 'flippable' ? 'antiFlippable' : 'flippable';
            console.timeEnd('loadpic')

            setTimeout(() => {
                this.imgLink = this.imgLink === 'https://picsum.photos/200/400' ? 'https://picsum.photos/200/401' : 'https://picsum.photos/200/400'

            }, 400)

        }
    }
}).mount('#app');








