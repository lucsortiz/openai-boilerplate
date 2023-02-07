<script setup lang="ts">
import { appState } from '../composables/UseStore';
</script>

<template>
  <v-card
    title="Generated Output"
    variant="outlined"
  >
    <v-sheet
      width="auto"
      class="p-8"
    >
      {{ appState.output }}
    </v-sheet>
  </v-card>
</template>

<style scoped>
</style>
