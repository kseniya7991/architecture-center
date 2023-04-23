<template>
    <nav class="nav">
        <ul class="nav-list">
            <li class="nav-item">
                <router-link to="/home">ГОЛОВНА</router-link>
            </li>
            <li class="nav-item active">
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

<style lang="scss" scoped>
.nav {
    width: 100%;

    padding: 40px 35px;
    background: #1c1c1c;

    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.nav-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.nav-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:not(:last-child) {
        margin-right: 30px;
    }

    &:first-child {
        &::before {
            content: "";
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            background: #b6d7e8;
            width: 24px;
            height: 1px;

            margin-right: 9px;
        }
    }

    &.active,
    &:hover {
        a {
            color: #c8c7c7;
        }
    }
}

a {
    color: #696969;

    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    transition-property: color;
    transition-duration: 0.3s;
}
</style>
