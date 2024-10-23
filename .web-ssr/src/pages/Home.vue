<template>
  <div>Home</div>
</template>

<script lang="ts">
import { useCounterStore } from "@/stores/counter";
import { defineComponent, onMounted, ref, useSSRContext } from "vue";

export default defineComponent({
  components: {},
  props: {},
  async setup() {
    let store = useCounterStore();
    return { store };
  },
});
</script>

<style scoped lang="scss"></style>
