<template>
    <ul class="phones-list">
        <li class="phone-item">
            <a href="tel:+380975674426" class="phone-link"
                >+38 (097) 567 - 44 - 26</a
            >
        </li>
        <li class="phone-item">
            <a href="tel:+380975674486" class="phone-link"
                >+38 (067) 567 - 44 - 86</a
            >
        </li>
    </ul>
</template>

<script>
export default {
    name: "PhonesLinks",
};
</script>

<style lang="scss" scoped>
.phones-list {
    display: flex;
    align-items: flex-start;

    flex-direction: column;
}

.phone-item {
    &:not(:last-child) {
        margin-bottom: 11px;
    }

    &:hover {
        opacity: 0.5;
    }

    transition-property: opacity;
    transition-duration: 0.3s;
}

.phone-link {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    font-weight: 500;
    font-size: 13px;
    line-height: 1.45;

    white-space: nowrap;

    color: #696969;

    &::before {
        content: "";
        display: flex;

        width: 12px;
        min-width: 12px;
        height: 12px;

        background: url("../../img/phone-icon.png");

        margin-right: 8px;
    }
}
</style>
