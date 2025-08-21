<script setup lang="ts">
import { onMounted } from "vue";

onMounted(async () => {
  // call the server API which runs useDatabaseHere()
  const res = await $fetch("/api/testdbcreate");
  console.log("testdbcreate response:", res);
});
</script>

<template>
  <div>
    <input id="toner type" type="text" placeholder="toner type" />
    <input id="quantity" type="text" placeholder="quantity" />
    <input id="location" type="text" placeholder="location" />
    <button>add values</button>
  </div>
</template>
