<script setup lang="ts">
import { appState } from '../composables/UseStore';
const loading = ref(false);
const valid = ref(true);
const goToNext = () => {
  appState.step = 3;
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<template>
  <v-card
    :loading="loading"
    title="Step 2"
    variant="outlined"
    subtitle="What OUTPUTS do you want us to offer to you?"
  >
    <v-sheet
      width="auto"
      class="mx-auto"
    >
      <v-form
        v-model="valid"
        fast-fail
        @submit.prevent="console.log('submit')"
      >
        <v-container>
          <v-row><h3>Social Media</h3></v-row>
          <v-row>
            <v-col cols="4">
              <v-checkbox
                v-model="appState.socialMedia"
                label="Facebook"
                value="Facebook"
              />
              <v-checkbox
                v-model="appState.socialMedia"
                label="Instagram"
                value="Instagram"
              />
            </v-col>
            <v-col cols="4">
              <v-checkbox
                v-model="appState.socialMedia"
                label="TikTok"
                value="TikTok"
              />
              <v-checkbox
                v-model="appState.socialMedia"
                label="Linkedin"
                value="Linkedin"
              />
            </v-col>
            <v-col cols="4">
              <v-checkbox
                v-model="appState.socialMedia"
                label="Twitter"
                value="TikTok"
              />
            </v-col>
          </v-row>
          <v-row><h3>Marketing</h3></v-row>
          <v-row>
            <v-col cols="6">
              <v-checkbox
                v-model="appState.marketingPlan"
                label="Marketing Plan"
                value="true"
              />
              <v-checkbox
                v-model="appState.email"
                label="Email"
                value="true"
              />
            </v-col>
            <v-col cols="6">
              <v-checkbox
                v-model="appState.newsletter"
                label="Newsletter"
                value="true"
              />
              <v-checkbox
                v-model="appState.slogan"
                label="Slogan"
                value="true"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="appState.tone"
                label="Tone"
                :items="['Formal', 'Informal']"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="appState.objective"
                label="What is the main objective of your OUTPUT?"
                variant="outlined"
              />
            </v-col>
          </v-row>
          <v-btn
            color="success"
            class="mt-4"
            block
            @click="goToNext"
          >
            Next
          </v-btn>
        </v-container>
      </v-form>
    </v-sheet>
  </v-card>
</template>

<style scoped>
</style>
