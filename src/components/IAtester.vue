<script setup lang="ts">
import { appState } from '../composables/UseStore';
</script>

<template>
  <Step1 v-if="appState.step === 1" />
  <Step2 v-if="appState.step === 2" />
  <Step3 v-if="appState.step === 3" />
  <Step4 v-if="appState.step === 4" />
</template>

<style scoped>
</style>
