import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";

// createApp(App).mount("#app");

const app = createApp(App);
// 創建 pinia 實例
const pinia = createPinia();
// 將 pinia 實例掛載到 app 上
app.use(pinia);
// 掛載 app
app.mount("#app");
