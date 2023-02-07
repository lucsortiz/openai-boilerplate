<script setup lang="ts">
import { appState } from '../composables/UseStore';
import { query } from '../utils/query';

const loading = ref(false);
const ageChoice = ref('range');

async function performQuery(params = {}) {
  loading.value = true;
  const response = await query(params);
  loading.value = false;
  appState.output = response;
  appState.step = 4;
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
      >
        <v-container>
          <v-row no-gutters>
            <v-col cols="6">
              <v-select
                v-model="appState.gender"
                label="Gender"
                :items="['Man', 'Woman', 'Any']"
              />
            </v-col>
          </v-row>
          <h3>Age</h3>
          <v-row>
            <v-radio-group
              v-model="ageChoice"
              @change="ageChoice === 'any' ? appState.ageRange=[0,99] : 0"
            >
              <v-radio
                label="Select range"
                value="range"
              />
              <v-range-slider
                v-model="appState.ageRange"
                :max="100"
                :min="0"
                :step="1"
                hide-details
                class="align-center"
                :disabled="ageChoice!=='range'"
              >
                <template #prepend>
                  <v-text-field
                    v-model="appState.ageRange[0]"
                    :min="0"
                    hide-details
                    single-line
                    type="number"
                    variant="outlined"
                    density="compact"
                    style="width: 70px"
                  />
                </template>
                <template #append>
                  <v-text-field
                    v-model="appState.ageRange[1]"
                    hide-details
                    single-line
                    type="number"
                    :max="99"
                    variant="outlined"
                    style="width: 70px"
                    density="compact"
                  />
                </template>
              </v-range-slider>
              <v-radio
                label="Any"
                value="any"
              />
            </v-radio-group>
          </v-row>
          <v-col cols="6">
            <v-select
              v-model="appState.travelParty"
              label="Travel Party"
              :items="['Single', 'Couple', 'Family', 'Group', 'Business', 'Any']"
            />
            <v-text-field
              v-model="appState.targetLocation"
              label="Coming from..."
            />
          </v-col>
          <v-btn
            color="success"
            class="mt-4"
            block
            @click="performQuery"
          >
            <span v-if="!loading">Finish</span>
            <span v-else>Generating ...</span>
          </v-btn>
        </v-container>
      </v-form>
    </v-sheet>
  </v-card>
</template>

<style scoped>
</style>
