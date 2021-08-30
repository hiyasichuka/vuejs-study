Vue.component('my-com', {
    data: function () {
        return {
            num: 0
        }
    },
    template: '<p>Like({{num}})<button @click="increment">+1</button></p>',
    methods: {
        increment: function () {
            this.num++;
        }
    }

})

new Vue({
    el: '#app'
})