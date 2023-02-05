<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute();
  const path = ref(route.path);
</script>

<template>
  <div>This is a dynamic route! The path is {{ path }}</div>
</template>

<style scoped></style>
