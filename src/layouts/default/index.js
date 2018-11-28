//
console.log(456)
//
import Vue  from 'vue';

import GM from './components/test.vue';

new Vue({
    el: '#zyGM',
    data: {
        message: 'hello world'
    },
    render: h => h(GM)
})
