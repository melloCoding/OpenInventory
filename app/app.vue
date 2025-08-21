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
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <button>say hello world</button>
  </div>
</template>
