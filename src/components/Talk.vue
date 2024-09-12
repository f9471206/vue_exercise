<template>
  <div class="talk">
    <ul>
      <li v-for="talk in talkList" :key="talk.id">
        <h3>{{ talk.title }}</h3>
        <p>{{ talk.content }}</p>
      </li>
    </ul>
    <button @click="getTalkList">加一句</button>
    <h1>總和</h1>
    <p>{{ sum }}</p>
    <p>{{ name }}</p>
    <p>{{ bigSum }}</p>
  </div>
</template>

<script setup lang="ts" name="Talk">
import { useTalkStore } from "@/store/talk";
import { useSumStore } from "@/store/sum";
import { storeToRefs } from "pinia";

const talkStore = useTalkStore();
const sumStore = useSumStore();
let { talkList } = storeToRefs(talkStore);
let { sum, name, bigSum } = storeToRefs(sumStore);

async function getTalkList() {
  useTalkStore().getTalkList();
}
</script>

<style></style>
