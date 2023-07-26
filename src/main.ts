import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import UIcomponents from "./components/UI/index";
import "./css/index.scss";
import "./scripts/index";
import { dynamicFunctions, staticFunctions } from "./scripts/index";

const app = createApp(App);

UIcomponents.forEach((component) => {
    app.component(component.name, component);
});

app.use(store).use(router).mount("#app");

window.addEventListener("DOMContentLoaded", () => {
    dynamicFunctions();
    staticFunctions();
});
