<template>
    <div>
        <project-hero
            :crumbs="crumbs"
            :title="title"
            :img="img"
            :quote="quote"
            :subquote="subquote"
        ></project-hero>

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
import ProjectHero from "@/components/sections/ProjectHero";

export default {
    components: {
        Breadcrumbs,
        ProjectHero,
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
                "Якщо скористатися найпростішим прикладом, то хто з нас став би займатися якими б то не було тяжкими фізичними вправами, якщо б це не приносило з собою якоїсь користі? І хто міг би по справедливості дорікнути прагнення до насолоди, яке не несло б з собою ніяких неприємностей, або того, хто уникав би такого страждання, яке не приносило. <br/> Дійсно, ніхто не відкидає, не зневажає, не уникає насолод тільки через те, що це насолоди, але лише через те, що тих, хто не вміє розумно вдаватися насолоді, осягають великі страждання. ",
            params: [
                { "Країна:": "Україна" },
                { "Місто:": "Львів" },
                { "Вулиця:": "Незалежності" },
                { "К-сть поверхів:": "15" },
                { "Час роботи:": "23 міс." },
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

            layout: [
                {
                    floor: "1",
                    rooms: [
                        { Гараж: "24 м" },
                        { Кухня: "54 м" },
                        { Ванна: "14 м" },
                        { Туалет: "10 м" },
                    ],
                },
                {
                    floor: "2",
                    rooms: [
                        { Спальня: "60 м" },
                        { Ванна: "20 м" },
                        { Туалет: "15 м" },
                    ],
                },
                {
                    floor: "3",
                    rooms: [{ Комната: "40 м" }, { Комната: "45 м" }],
                },
                {
                    floor: "4",
                    rooms: [
                        { Комната: "40 м" },
                        { Комната: "45 м" },
                        { Лоджия: "8 м" },
                    ],
                },
            ],

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
