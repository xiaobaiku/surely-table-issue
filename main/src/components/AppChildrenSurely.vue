<script setup>
import micro from "@micro-zoe/micro-app";

function handleCreated() {
  console.log("micro-app元素被创建");
}
function handleBeforemount() {
  console.log("子应用即将被渲染");
}
function handleMounted() {
  console.log("子应用渲染完成");
}
function handleUnmount() {
  console.log("子应用被卸载");
}
function handleError() {
  console.log("子应用渲染出错");
}
</script>
<template>
  <micro-app
    name="surely"
    url="http://localhost:8081/"
    :keep-alive="true"
    baseroute="/surely"
    @created="handleCreated"
    @beforemount="handleBeforemount"
    @mounted="handleMounted"
    @unmount="handleUnmount"
    @error="handleError"
  />
</template>
