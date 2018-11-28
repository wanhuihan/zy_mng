<template lang="html">

    <div class="">
        <div class="a">
            <div class="b">
                <h2>hello world++++++++</h2>

            </div>

            <Login></Login>

            <img src="../../../public/assets/demo.png" alt="">

        </div>
    </div>
</template>

<script>

import '../../../public/sass/test.scss';
//
import Login from '../../../public/components/login.vue';

export default {
    //
    components: {
        Login: Login
    },
    //
    data () {
        return {
            // img: img
        }
    },
    mounted () {
        // console.log(img)
    }
}
</script>

<style lang="scss" scoped>
//
.a {
    .b {
        color: red;
        background: url(../../../public/assets/demo.png) no-repeat;
    }
}
</style>
