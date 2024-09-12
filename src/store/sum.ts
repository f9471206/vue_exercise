import { defineStore } from "pinia";

export const useSumStore = defineStore("sum", {
  actions: {
    increment(value: number) {
      this.sum += value;
      this.name = "test";
    },

    decrement(value: number) {
      this.sum -= value;
    },
  },

  state: () => {
    return {
      sum: 0,
      name: "sum",
    };
  },

  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
});
