## 启动项目：

1. pnpm i
2. pnpm run-all

注意：子应用分别占用8080，8081端口。如果更改了端口号需要做以下更改

```html
<!-- main\src\components\AppChildrenAntd.vue  -->
<template>
  <micro-app
    name="antd"
    url="http://localhost:8080/"   // 修改该处的端口号为对应的端口
    :keep-alive="true"
    baseroute="/antd"
    @created="handleCreated"
    @beforemount="handleBeforemount"
    @mounted="handleMounted"
    @unmount="handleUnmount"
    @error="handleError"
  />
</template>


<!-- main\src\components\AppChildrenSurely.vue  -->
<template>
  <micro-app
    name="antd"
    url="http://localhost:8081/"   // 修改该处的端口号为对应的端口
    :keep-alive="true"
    baseroute="/antd"
    @created="handleCreated"
    @beforemount="handleBeforemount"
    @mounted="handleMounted"
    @unmount="handleUnmount"
    @error="handleError"
  />
</template>
```
