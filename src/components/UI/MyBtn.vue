<template>
    <a class="btn" v-if="isLink">
        <slot></slot>
    </a>
    <button class="btn" v-else>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "MyBtn",
    props: {
        isLink: {
            type: Boolean,
            required: false,
        },
    },
};
</script>

<style lang="scss" scoped>
.btn {
    font-weight: 400;
    font-size: 13px;
    line-height: 145.81%;

    text-transform: uppercase;

    color: #1c1c1c;

    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    padding: 15px;

    border: 1px solid #b6d7e8;

    transition-property: background;
    transition-duration: 0.3s;

    &-white {
        background-color: #fff;

        &:hover {
            background-color: #b6d7e8;
        }
    }

    &-blue {
        background-color: #b6d7e8;

        &:hover {
            background-color: #fff;
        }
    }
}
</style>
