<template>
    <Header></Header>
    <main class="main">
        <router-view></router-view>
    </main>
    <Footer></Footer>
</template>

<script>
import Header from "@/components/sections/Header.vue";
export default {
    components: { Header },
};
</script>

<style lang="scss">
@import "@/css/index.scss";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}


</style>
