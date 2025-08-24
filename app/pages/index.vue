<script setup lang="ts">
//import { onMounted } from "vue";
import { ref } from "vue";
const tonerType = ref("");
const quantity = ref("");
const location = ref("");

const loading = ref(false);
const msg = ref("");

async function addToner() {
  loading.value = true;
  msg.value = "";
  try {
    const res = await $fetch("/api/newToner", {
      method: "POST",
      body: {
        tonerType: tonerType.value,
        quantity: quantity.value,
        location: location.value,
      },
    });
    if (res?.ok) {
      msg.value = `Saved! New id: ${res.toner?.id}`;
      // optional: clear inputs
      tonerType.value = "";
      quantity.value = "";
      location.value = "";
    } else {
      msg.value = "Unexpected response.";
    }
  } catch (e: any) {
    msg.value = e?.data?.error || e?.message || "Request failed.";
  } finally {
    loading.value = false;
  }
}

/*
onMounted(async () => {
  // call the server API which runs useDatabaseHere()
  const res = await $fetch("/api/testdbcreate");
  console.log("testdbcreate response:", res);
});
*/
</script>

<template>
  <div>
    <input
      v-model="tonerType"
      id="toner type"
      type="text"
      placeholder="toner type"
    />
    <input
      v-model="quantity"
      id="quantity"
      type="text"
      inputmode="numeric"
      pattern="[0-9]*"
      placeholder="quantity"
      @input="quantity = quantity.replace(/[^0-9]/g, '')"
    />
    <input
      v-model="location"
      id="location"
      type="text"
      placeholder="location"
    />
    <button :disabled="loading" @click="addToner">
      {{ loading ? "Saving..." : "Add values" }}
    </button>
    <p v-if="msg">{{ msg }}</p>
  </div>

  <addToner />
</template>

<script lang="ts" setup></script>
