<template>
    <div>
        <section class="section section-project-hero">
            <div class="container">
                <Breadcrumbs :crumbs="crumbs"></Breadcrumbs>
            </div>
        </section>
        <section class="section section-project-descr">
            <div class="container"></div>
        </section>
        <section class="section section-project-layout">
            <div class="container"></div>
        </section>
        <section class="section section-connection">
            <div class="container"></div>
        </section>
        <section class="section section-project-calculator">
            <div class="container"></div>
        </section>
        <section class="section section-similar-projects">
            <div class="container"></div>
        </section>
    </div>
</template>

<script>
import Breadcrumbs from "@/components/sections/Breadcrumbs";

export default {
    components: {
        Breadcrumbs,
    },
    data() {
        return {
            crumbs: [
                { text: "Головна", link: "/" },
                { text: "Проекти", link: "/projects" },
                {
                    text: "THE ROCK AND ROLL HALL",
                    link: "/projects/project-single",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
