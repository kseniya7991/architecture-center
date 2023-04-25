<template>
    <ul class="breadcrumbs-list">
        <li
            v-for="(crumb, ci) in crumbs"
            :key="ci"
            class="breadcrumb-item"
            :class="{ active: isLast(ci) }"
        >
            <span class="breadcrumb-link" @click="$router.push(crumb.link)">
                {{ crumb.text }}
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        crumbs: {
            type: Array,
            required: true,
        },
    },

    methods: {
        isLast(ci) {
            return ci === this.crumbs.length - 1;
        },
    },
};
</script>

<style lang="scss" scoped>
.breadcrumbs-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-bottom: 20px;

    .breadcrumb {
        &-item {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            position: relative;

            cursor: pointer;

            &:not(:last-child) {
                margin-right: 15px;

                &::after {
                    display: flex;
                }
            }

            &::after {
                content: "";
                position: absolute;

                right: -10px;
                width: 5px;

                height: 1px;
                background: #1c1c1c;

                display: none;
                align-items: center;
                justify-content: center;
            }

            &.active {
                cursor: default;

                .breadcrumb-link {
                    color: #a0a0a0;
                    &::after {
                        opacity: 0;
                    }
                }
            }

            &:hover {
                .breadcrumb-link {
                    &::after {
                        background: #1c1c1c;
                    }
                }
            }
        }

        &-link {
            position: relative;

            display: block;

            font-weight: 300;
            font-size: 14px;
            line-height: 138.7%;

            text-transform: uppercase;

            &:after {
                content: "";
                position: absolute;

                left: 0;
                top: calc(100% + 5px);

                width: 100%;
                height: 1px;
                background: #b6d7e8;
                opacity: 1;

                display: flex;
                align-items: center;
                justify-content: center;

                transition-property: background;
                transition-duration: 0.3s;
            }
        }
    }
}
</style>
