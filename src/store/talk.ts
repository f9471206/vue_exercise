import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";

// export const useTalkStore = defineStore("talk", {
//   actions: {
//     async getTalkList() {
//       let {
//         data: { content: title },
//       } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
//       let obj = { id: nanoid(), title };

//       this.talkList.push(obj);
//     },
//   },

//   state() {
//     return {
//       talkList:
//         [
//           { id: "talk1", title: "Hello" },
//           { id: "talk2", title: "Hi" },
//           { id: "talk3", content: "Good morning" },
//         ] || [],
//     };
//   },
// });
import { reactive } from "vue";
const talkList = reactive(
  JSON.parse(localStorage.getItem("talkList") as string) || [
    { id: "talk1", title: "Hello" },
    { id: "talk2", title: "Hi" },
    { id: "talk3", title: "Good morning" },
  ]
);
export const useTalkStore = defineStore("talk", () => {
  async function getTalkList() {
    let {
      data: { content: title },
    } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
    let obj = { id: nanoid(), title };

    talkList.push(obj);
  }

  return { talkList, getTalkList };
});
