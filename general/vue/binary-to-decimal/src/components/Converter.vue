<template>
  <div class="relative">
    <div
      class="flex flex-col overflow-hidden w-80 h-80 justify-around rounded-xl"
    >
      <div
        class="flex-auto flex flex-col justify-around items-center"
        v-bind:class="{
          'order-1 bg-gradient-to-bl from-red-400 to-red-300': !swap,
          'order-2 bg-white': swap,
        }"
      >
        <h1
          class="text-xl text-center"
          v-bind:class="{ 'text-white': !swap, 'text-red-400': swap }"
        >
          Binary
        </h1>
        <input
          id="binary"
          class="w-40 h-8 border-2 border-x-slate-200 focus:border-x-slate-400 focus:outline-none"
          type="text"
          v-model="binary"
          v-on:keypress="binaryInput($event)"
          v-on:keyup="binaryToDecimal"
          :disabled="swap"
        />
      </div>
      <div
        class="flex-auto flex flex-col justify-around items-center"
        v-bind:class="{
          'order-1 bg-gradient-to-bl from-red-400 to-red-300': swap,
          'order-2  bg-white': !swap,
        }"
      >
        <h1
          class="text-xl text-center"
          v-bind:class="{ 'text-red-400': !swap, 'text-white': swap }"
        >
          Decimal
        </h1>
        <input
          id="decimal"
          class="w-40 h-8 border-2 border-x-slate-200 focus:border-x-slate-400 focus:outline-none"
          type="text"
          v-model="decimal"
          v-on:keypress="decimalInput($event)"
          v-on:keyup="decimalToBinary"
          :disabled="!swap"
        />
      </div>
    </div>
    <div
      class="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden"
    >
      <button
        class="h-8 w-8 object-right shadow-lg bg-gray-50 hover:bg-gray-200"
        v-on:click="swap = !swap"
      >
        <img src="../assets/rotate.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "converter",
  data() {
    return {
      binary: "",
      decimal: "",
      swap: false,
    };
  },
  methods: {
    binaryInput(event) {
      const regex = /^[0-1]+$/;
      if (!regex.test(event.key)) {
        event.preventDefault();
      }
    },
    decimalInput(event) {
      const regex = /^[0-9]+$/;
      if (!regex.test(event.key)) {
        event.preventDefault();
      }
    },
    binaryToDecimal() {
      if (this.binary == "") {
        this.decimal = "";
      } else {
        this.decimal = parseInt(this.binary, 2);
      }
    },
    decimalToBinary() {
      if (this.decimal == "") {
        this.binary = "";
      } else {
        this.binary = Number(this.decimal).toString(2);
      }
    },
  },
};
</script>

<style></style>
