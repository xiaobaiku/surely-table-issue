<template>
  <div>
    <h1>基座应用 菜单:</h1>
    <button @click="router.push('/')">基座首页</button>
    &nbsp;&nbsp;
    <button @click="router.push('antd')">子应用（antdv table）</button>
    &nbsp;&nbsp;
    <button @click="router.push('surely')">子应用（surely table）</button>

    <hr style="margin-top: 2rem" />
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
