<template>
    <nav class="contacts-nav">
        <ul class="contacts-list">
            <li class="contact-item">
                <a href="#" class="contact-link">TWITTER</a>
            </li>
            <li class="contact-item">
                <a href="#" class="contact-link">FACEBOOK</a>
            </li>
            <li class="contact-item">
                <a href="#" class="contact-link">INSTAGRAM</a>
            </li>
        </ul>
        <PhonesLinks></PhonesLinks>
    </nav>
</template>

<script>
export default {
    name: "ContactsNav",
};
</script>

<style lang="scss" scoped>
.contacts-nav {
    width: 100%;
    padding: 25px;
    background: #f8f8f8;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.contacts-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.contact-item {
    &:not(:last-child) {
        margin-right: 58px;
    }

    &:hover {
        .contact-link {
            color: #000;
        }
    }
}

.contact-link {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    color: #696969;

    transition-property: color;
    transition-duration: 0.3s;
}

.phones-list {
    margin-left: 60px;
}
</style>
