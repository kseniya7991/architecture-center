<template>
    <header class="header">
        <logo-wrap></logo-wrap>
        <nav-bar></nav-bar>
        <contacts-nav></contacts-nav>
        <order-btn></order-btn>
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    width: 100vw;
    .logo-wrap {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        width: 100%;
        max-width: 291px;

        background: #313131;

        padding: 33px 59px;
    }
}
</style>
