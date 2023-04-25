<template>
    <section class="section section-project section-project-hero">
        <div class="container">
            <div class="blocks-wrap">
                <div class="left-block">
                    <Breadcrumbs :crumbs="crumbs"></Breadcrumbs>
                    <h1 class="project-title">
                        {{ title }}
                    </h1>
                    <p class="project-quote">
                        {{ quote }}
                    </p>

                    <div v-show="subquote" class="project-subquote">
                        {{ subquote }}
                    </div>
                </div>
                <div class="right-block">
                    <div class="img-wrap">
                        <img
                            class="project-img"
                            :alt="title"
                            :src="require(`@/img/${img}`)"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumbs from "@/components/sections/Breadcrumbs";

export default {
    components: {
        Breadcrumbs,
    },

    props: {
        crumbs: {
            type: Array,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        quote: {
            type: String,
            required: true,
        },
        subquote: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.section-project-hero {
    padding: 0;
}
.left-block {
    padding-bottom: 25px;
}

.right-block {
    margin-right: -60px;

    .img-wrap {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.project {
    &-title {
        font-weight: 450;
        font-size: 74px;
        line-height: 1.28;

        color: #1c1c1c;

        margin-bottom: 30px;

        text-align: left;
        text-transform: uppercase;
    }

    &-quote {
        width: 100%;
        max-width: 345px;

        font-weight: 400;
        font-size: 14px;
        line-height: 138.7%;

        text-align: justify;

        color: #1c1c1c;
    }

    &-subquote {
        width: 100%;
        max-width: 206px;

        margin-top: -15px;

        align-self: flex-end;

        font-weight: 300;
        font-size: 14px;
        line-height: 145.81%;

        text-align: justify;
        text-transform: uppercase;

        color: #999999;
    }
}
</style>
