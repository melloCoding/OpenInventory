<script setup lang="ts">
//import { onMounted } from "vue";
import { ref } from "vue";
const tonerType = ref("");
const quantity = ref("");

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
      },
    });
    if (res?.ok) {
      msg.value = `Saved!`;
      // optional: clear inputs
      tonerType.value = "";
      quantity.value = "";
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
  <div class="flex h-screen justify-center items-center">
    <UForm :state="{ tonerType, quantity }">
      <UFormField>
        <UInput
          v-model="tonerType"
          id="toner type"
          type="text"
          placeholder="toner type"
        />
      </UFormField>

      <UFormField>
        <UInput
          v-model="quantity"
          id="quantity"
          type="text"
          inputmode="numeric"
          placeholder="quantity"
        />
      </UFormField>

      <UButton :disabled="loading" @click="addToner">
        {{ loading ? "Saving..." : "Add values" }}
      </UButton>
      <p v-if="msg">{{ msg }}</p>
    </UForm>
  </div>
</template>
