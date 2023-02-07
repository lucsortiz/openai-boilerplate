<script setup lang="ts">
</script>

<template>
  <v-app>
    <v-app-bar
      :elevation="2"
      title="MarketDirect"
      :style="'color:white'"
      color="#00BCD4"
      density="compact"
    />

    <v-main>
      <v-container
        class="spacing-playground pa-6"
        fluid
      >
        <v-row>
          <v-col
            class="flex flex-col gap-3"
          >
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer border>
      &copy; THN 2023
    </v-footer>
  </v-app>
</template>

<style></style>
