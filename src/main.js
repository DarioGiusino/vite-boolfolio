import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { router } from "./router";
import App from "./App.vue";
import AppLoader from "./components/AppLoader.vue";

const app = createApp(App);
app.component("AppLoader", AppLoader);
app.use(router);

app.mount("#app");
