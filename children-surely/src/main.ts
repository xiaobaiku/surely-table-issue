import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.mount("#app");

// 与基座进行数据交互
function handleMicroData(router: Router) {
  // 是否是微前端环境
  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.microApp.addDataListener((data: Record<string, any>) => {
      // 当基座下发path时进行跳转
      if (data.path && data.path !== router.currentRoute.value.path) {
        router.push(data.path as string);
      }
    });
  }
}

// handleMicroData(router)
