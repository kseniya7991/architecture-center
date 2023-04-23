<template>
    <nav class="contacts-nav">
        <ul class="contacts-list">
            <li class="nav-item">
                <router-link to="/home">ГОЛОВНА</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/projects">ПРОЕКТИ</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/awards">НАГОРОДИ</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/contacts">КОНТАКТИ</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style lang="scss" scoped></style>
