<template>
    <div class="order-btn">
        <a href="#" class="order-link">Замовити консультацию</a>
    </div>
</template>

<script>
export default {
    name: "OrderBtn",
};
</script>

<style lang="scss" scoped>
.order-btn {
    background: #313131;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;
}

.order-link {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    font-weight: 400;
    font-size: 11px;
    line-height: 1.45;
    text-transform: uppercase;

    white-space: nowrap;

    color: #c8c7c7;

    &:hover {
        &:after {
            width: 0px;
        }
    }

    &:after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: #c8c7c7;

        margin-top: 7px;

        transition-property: width;
        transition-duration: 0.3s;
    }
}
</style>
