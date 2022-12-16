const { createApp } = Vue

createApp({
    data() {
        return{
            word: null
        }
    },
    methods: {
        greetings: function() {
            this.word;
        },
    }
}).mount('#app')