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
<!--
#539fe6 - secondary
-->
<template>
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div class="bg-secondary px-7 py-7 rounded-lg shadow-lg">
        <UForm :state="{ tonerType, quantity }">
          <UFormField class="mb-2" label="Toner Type" description="Ex: TN-660 TN-830" required>
            <UInput
              v-model="tonerType"
              id="Toner Type"
              type="text"
              placeholder="toner type"
              class="w-full"
            />
          </UFormField>
          <UFormField class="mb-2" label="Quantity" description="How much toner would you like to add" required>
            <UInput
              v-model="quantity"
              id="Quantity"
              type="text"
              inputmode="numeric"
              placeholder="quantity"
              class="w-full"
            />
          </UFormField>
          <UButton :disabled="loading" @click="addToner" color="primary">
            {{ loading ? "Saving..." : "Add values" }}
          </UButton>
          <p v-if="msg">{{ msg }}</p>
        </UForm>
      </div>
  </div>
</template>
