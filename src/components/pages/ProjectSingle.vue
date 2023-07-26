<template>
    <div>
        <project-hero
            :crumbs="crumbs"
            :title="title"
            :img="img"
            :quote="quote"
            :subquote="subquote"
        ></project-hero>

        <project-descr
            :description="description"
            :params="params"
            :benefits="benefits"
        ></project-descr>

        <project-layout :layouts="layouts"> </project-layout>
        <project-feedback> </project-feedback>

        <section class="section section-project section-project-layout">
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

<script lang="ts">
import Breadcrumbs from "@/components/sections/Breadcrumbs.vue";
import ProjectHero from "@/components/sections/ProjectSingle/ProjectHero.vue";
import ProjectDescr from "@/components/sections/ProjectSingle/ProjectDescr.vue";
import ProjectLayout from "@/components/sections/ProjectSingle/ProjectLayout.vue";
import ProjectFeedback from "@/components/sections/ProjectSingle/ProjectFeedback.vue";

export default {
    components: {
        Breadcrumbs,
        ProjectHero,
        ProjectDescr,
        ProjectLayout,
        ProjectFeedback,
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
            title: "The rock and roll hall",
            img: "project-1.png",
            quote:
                "Дійсно, ніхто не відкидає, не зневажає, не уникає насолод тільки через те, що це насолоди, але лише через те, що тих, хто не вміє розумно вдаватися насолоді, осягають великі страждання. Втім, тут дуже легко і просто провести відмінності, тому що, коли ми вільні і нам надана повна можливість вибору бажаного.",
            subquote:
                "Але при деяких обставинах – або на вимогу боргу, або в силу якоїсь необхідності часто доводиться.",
            description:
                "Якщо скористатися найпростішим прикладом, то хто з нас став би займатися якими б то не було тяжкими фізичними вправами, якщо б це не приносило з собою якоїсь користі? І хто міг би по справедливості дорікнути прагнення до насолоди, яке не несло б з собою ніяких неприємностей, або того, хто уникав би такого страждання, яке не приносило. <br/> <br/> Дійсно, ніхто не відкидає, не зневажає, не уникає насолод тільки через те, що це насолоди, але лише через те, що тих, хто не вміє розумно вдаватися насолоді, осягають великі страждання. ",
            params: [
                {
                    title: "Країна:",
                    value: "Україна",
                },
                {
                    title: "Місто:",
                    value: "Львів",
                },
                {
                    title: "Вулиця:",
                    value: "Незалежності",
                },
                {
                    title: "К-сть поверхів:",
                    value: "15",
                },
                {
                    title: "Час роботи:",
                    value: "23 міс.",
                },
            ],
            benefits: [
                {
                    title: "Будівельна експертиза",
                    descr:
                        "Всі рішення проекту можна реалізувати технічно, для цього ми завжди консультуємося з досвідченими фахівцями в процесі створення дизайн-проекту",
                },
                {
                    title: "Реальні матеріали і меблі",
                    descr:
                        "У специфікації проекту ми вказуємо всі матеріали і меблі, із зазначенням артикулів і посилань на організації, де їх можна придбати",
                },
                {
                    title: "Гарантії термінів і зобов'язання",
                    descr:
                        "Перед початком робіт ми завжди підписуємо офіційний договір, який дає гарантії для наших замовників, що робота буде виконана точно термін і без помилок",
                },
                {
                    title: "Реальні та позитивні відгуки",
                    descr:
                        "Так само як немає нікого, хто полюбивши, вважав за краще і зажадав би саме страждання тільки за те, що це страждання, а не тому,",
                },
            ],

            layouts: [
                {
                    floor: "1",
                    rooms: [
                        {
                            title: "Гараж",
                            size: "24",
                            img: "img1.png",
                        },
                        {
                            title: "Кухня",
                            size: "54",
                            img: "img2.jpg",
                        },
                        {
                            title: "Ванна",
                            size: "14",
                            img: "img3.jpg",
                        },
                        {
                            title: "Туалет",
                            size: "10",
                            img: "img4.jpg",
                        },
                    ],
                    scheme: "floor1.png",
                },
                {
                    floor: "2",
                    rooms: [
                        {
                            title: "Спальня",
                            size: "54",
                            img: "img2.jpg",
                        },
                        {
                            title: "Ванна",
                            size: "15",
                            img: "img3.jpg",
                        },
                        {
                            title: "Туалет",
                            size: "10",
                            img: "img1.png",
                        },
                    ],
                    scheme: "floor2.webp",
                },
                {
                    floor: "3",
                    rooms: [
                        {
                            title: "Ванна",
                            size: "54",
                            img: "img3.jpg",
                        },
                        {
                            title: "Кухня",
                            size: "15",
                            img: "img2.jpg",
                        },
                        {
                            title: "Туалет",
                            size: "10",
                            img: "img1.png",
                        },
                    ],
                    scheme: "floor3.png",
                },
                {
                    floor: "4",
                    rooms: [
                        {
                            title: "Кухня",
                            size: "54",
                            img: "img1.png",
                        },
                        {
                            title: "Ванна",
                            size: "15",
                            img: "img1.png",
                        },
                        {
                            title: "Туалет",
                            size: "10",
                            img: "img1.png",
                        },
                    ],
                    scheme: "floor4.jpg",
                },
            ],

            selectedTabFloor: 0,
            selectedTabRooms: 0,

            similar: [
                {
                    title: "ЖК «Сонячний»",
                    space: "124 м",
                    img: "../img/test.png",
                    href: "/sdf",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
