<template>
    <section class="section section-project section-project-descr">
        <div class="container">
            <div class="blocks-wrap">
                <div class="left-block">
                    <h2 class="section-title">
                        Опис проекта
                    </h2>
                    <div class="params-wrap">
                        <div class="left-wrap">
                            <div
                                v-html="description"
                                class="params-descr"
                            ></div>
                            <my-btn :isLink="true" href="#" class="btn-white">
                                Розрахувати подібний проект
                            </my-btn>
                        </div>
                        <div class="params-block">
                            <div class="title-block">
                                <span
                                    class="param-title"
                                    v-for="(param, pi) in params"
                                >
                                    {{ param.title }}
                                </span>
                            </div>
                            <div class="value-block">
                                <span
                                    class="param-value"
                                    v-for="(param, pi) in params"
                                >
                                    {{ param.value }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-block">
                    <ol class="benefits-wrap">
                        <li
                            v-for="(benefit, bi) in benefits"
                            class="benefit-item"
                        >
                            <div class="content-wrap">
                                <span class="benefit-title">
                                    {{ benefit.title }}
                                </span>
                                <div class="benefit-descr">
                                    {{ benefit.descr }}
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        description: {
            type: String,
            required: true,
        },
        params: {
            type: Array,
            required: true,
        },
        benefits: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {
            isLink: true,
        };
    },
};
</script>

<style lang="scss" scoped>
.section-project-descr {
    .left-block {
        width: 100%;
        max-width: calc(100% - 830px);

        padding-top: 0;
    }

    .right-block {
        margin-right: -60px;

        background: #1c1c1c;
    }

    .params-wrap {
        width: 100%;

        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 40px;
        .left-wrap {
            width: 100%;
            max-width: 344px;
        }
    }

    .params-block {
        display: flex;
        align-items: flex-start;

        gap: 35px;
    }

    .title-block,
    .value-block {
        display: flex;
        flex-direction: column;

        gap: 15px;
    }

    .title-block {
        align-items: flex-start;
    }
    .value-block {
        align-items: flex-end;
    }

    .params-descr {
        font-weight: 400;
        font-size: 14px;
        line-height: 138.7%;

        color: #1c1c1c;

        text-align: justify;

        margin-bottom: 35px;
    }

    .param {
        &-item {
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &-title {
            display: block;

            font-weight: 300;
            font-size: 13px;
            line-height: 1.3;

            color: #1c1c1c;
        }

        &-value {
            display: block;

            font-weight: 400;
            font-size: 15px;
            line-height: 1.3;

            text-align: right;

            color: #1c1c1c;
        }
    }

    .benefits-wrap {
        width: 100%;
        padding: 50px 84px 64px 60px;
        margin-bottom: -50px;

        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
        justify-content: space-between;

        counter-reset: benefit-counter;

        .content-wrap {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    }

    .benefit {
        &-item {
            counter-increment: benefit-counter;

            width: 100%;
            max-width: calc((100% - 60px) / 2);

            display: flex;
            align-items: flex-start;

            margin-bottom: 50px;

            &::before {
                content: "0" counter(benefit-counter);

                font-weight: 400;
                font-size: 18px;
                line-height: 1.5;

                color: #b6d7e8;

                margin-right: 18px;
                margin-top: 4px;
            }
        }

        &-title {
            font-weight: 450;
            font-size: 18px;
            line-height: 2;

            color: #ededed;
        }

        &-descr {
            text-align: left;

            font-weight: 300;
            font-size: 14px;
            line-height: 130%;

            color: #ededed;
        }
    }
}
</style>
