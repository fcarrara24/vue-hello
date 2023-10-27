
//step 1: printing using data the message to screen
const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'message to print',
            imgLink: 'https://picsum.photos/200/300'
        };
    },
    methods: {
        newImage() {
            console.time('loadpic')
            console.log('hi')
            //necessary to refresh link from lorem picsum
            this.imgLink = 'https://picsum.photos/200/400'
            console.timeEnd('loadpic')

        }
    }
}).mount('#app');








