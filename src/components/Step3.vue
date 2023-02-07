<script setup lang="ts">
import { appState } from '../composables/UseStore';
const loading = ref(false);
const valid = ref(true);
const ageChoice = ref('range');
const goToNext = () => {
  appState.step = 3;
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
</script>

<template>
  <v-card
    :loading="loading"
    title="Step 3"
    variant="outlined"
    subtitle="Tell us more about your target audience"
  >
    <v-sheet
      width="auto"
      class="mx-auto"
    >
      <v-form
        fast-fail
        v-model="valid"
        @submit.prevent="console.log('submit')"
      >
            <v-container>
              <v-row no-gutters>
                <v-col cols="6">
                  <v-select
                      v-model="appState.gender"
                      label="Gender"
                      :items="['Man', 'Woman', 'Any']"
                  ></v-select>
                </v-col>
              </v-row>
                <h3>Age</h3>
                <v-row>
                <v-radio-group v-model="ageChoice" @change="ageChoice === 'any' ? appState.ageRange=[0,99] : 0">
                  <v-radio label="Select range" value="range"></v-radio>
                  <v-range-slider
                      v-model="appState.ageRange"
                      :max="100"
                      :min="0"
                      :step="1"
                      hide-details
                      class="align-center"
                      :disabled="ageChoice!=='range'"
                  >
                    <template v-slot:prepend>
                      <v-text-field
                          v-model="appState.ageRange[0]"
                          :min="0"
                          hide-details
                          single-line
                          type="number"
                          variant="outlined"
                          density="compact"
                          style="width: 70px"
                      ></v-text-field>
                    </template>
                    <template v-slot:append>
                      <v-text-field
                          v-model="appState.ageRange[1]"
                          hide-details
                          single-line
                          type="number"
                          :max="99"
                          variant="outlined"
                          style="width: 70px"
                          density="compact"
                      ></v-text-field>
                    </template>
                  </v-range-slider>
                  <v-radio label="Any" value="any"></v-radio>
                </v-radio-group>
                </v-row>
                <v-col cols="6">
                  <v-select
                      v-model="appState.travelParty"
                      label="Travel Party"
                      :items="['Single', 'Couple', 'Family', 'Group', 'Business', 'Any']"
                ></v-select>
                  <v-text-field
                      v-model="appState.targetLocation"
                      label="Coming from..."
                  ></v-text-field>
                </v-col>
              <v-btn
                  color="success"
                  class="mt-4"
                  block
                  @click="goToNext"
              >
                Finish
              </v-btn>
            </v-container>
      </v-form>
    </v-sheet>
  </v-card>
</template>

<style scoped>
</style>
