<template>
  <div>
    <h1>總和 {{ sum }} 名稱:{{ name }} 放大{{ bigSum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
</template>

<script lang="ts" setup name="Sum">
import { ref, toRefs } from "vue";
import { storeToRefs } from "pinia";

import { useSumStore } from "@/store/sum";
const sumStore = useSumStore();

let { sum, name, bigSum } = storeToRefs(sumStore);

function add() {
  sumStore.increment(n.value);
}
function minus() {
  sumStore.decrement(n.value);
}

let n = ref(1);
</script>

<style>
select,
button {
  margin: 0 5px;
}
</style>
