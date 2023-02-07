<script setup lang="ts">
import {appState} from '../composables/UseStore';
const loading = ref(false);
const valid = ref(true);

const goToNext = () => {
  appState.step = 2;
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
</script>

<template>
  <v-card
    :loading="loading"
    title="Step 1"
    class="cyan-darken-4"
    variant="outlined"
    subtitle="Complete your hotel profile to start creating your marketing content"
  >
    <v-sheet
      width="auto"
      class="mx-auto mb-6"
    >
      <v-form
        fast-fail
        v-model="valid"
        @submit.prevent="console.log('submit')"
      >
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    md="12"
                >
                  <v-text-field
                      v-model="appState.propertyName"
                      label="Property Name"
                      required
                      color="cyan-darken-1"
                  ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="12"
                >
                  <v-text-field
                      v-model="appState.location"
                      label="Describe the location of your hotel"
                      required
                      color="cyan-darken-1"
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    md="12"
                >
                  <v-text-field
                      v-model="appState.perks"
                      label="Describe the perks of your hotel"
                      required
                      color="cyan-darken-1"
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    md="12"
                >
                  <v-select
                      v-model="appState.category"
                      label="Category"
                      :items="['5*', '4*', '3*', '2*', '1*', 'Other']"
                      color="cyan-darken-1"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row no-gutters>
                  <p class="text-cyan-darken-2 px-3">Property Type</p>
                  <p class="left-0">You can choose more than one:</p>
              </v-row>
              <v-row no-gutters>
                  <v-col
                    cols="3">
                  <v-checkbox
                      v-model="appState.propertyType"
                      label="Adults Only"
                      value="Adults Only"
                      color="cyan-darken-2"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="appState.propertyType"
                      label="Beach"
                      value="Beach"
                      color="cyan-darken-2"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="appState.propertyType"
                      label="City"
                      value="City"
                      color="cyan-darken-2"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="appState.propertyType"
                      label="Hostel"
                      value="Hostel"
                      color="cyan-darken-2"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="appState.propertyType"
                      label="Resort"
                      value="Resort"
                      color="cyan-darken-2"
                  ></v-checkbox>
                </v-col>
                  <v-col
                        cols="3">
                  <v-checkbox
                      v-model="appState.propertyType"
                      label="Airport Hotel"
                      value="Airport Hotel"
                      color="cyan-darken-2"
                  ></v-checkbox>
                    <v-checkbox
                        v-model="appState.propertyType"
                        label="Boutique"
                        value="Boutique"
                        color="cyan-darken-2"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="appState.propertyType"
                        label="Conference"
                        value="Conference"
                        color="cyan-darken-2"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="appState.propertyType"
                        label="Leisure"
                        value="Leisure"
                        color="cyan-darken-2"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="appState.propertyType"
                        label="Single Apartment"
                        value="Single Apartment"
                        color="cyan-darken-2"
                    ></v-checkbox>
                  </v-col>
                  <v-col
                        cols="3">
                    <v-checkbox
                        v-model="appState.propertyType"
                        label="Apart Hotel"
                        value="Apart Hotel"
                        color="cyan-darken-2"
                    ></v-checkbox>
                      <v-checkbox
                          v-model="appState.propertyType"
                          label="Business"
                          value="Business"
                          color="cyan-darken-2"
                      ></v-checkbox>
                      <v-checkbox
                          v-model="appState.propertyType"
                          label="Family"
                          value="Family"
                          color="cyan-darken-2"
                      ></v-checkbox>
                      <v-checkbox
                          v-model="appState.propertyType"
                          label="Luxury"
                          value="Luxury"
                          color="cyan-darken-2"
                      ></v-checkbox>
                      <v-checkbox
                          v-model="appState.propertyType"
                          label="Sky Resort"
                          value="Sky Resort"
                          color="cyan-darken-2"
                      ></v-checkbox>
                    </v-col>
                  <v-col
                        cols="3">
                      <v-checkbox
                          v-model="appState.propertyType"
                          label="B&B"
                          value="B&B"
                          color="cyan-darken-2"
                      ></v-checkbox>
                        <v-checkbox
                            v-model="appState.propertyType"
                            label="Casino"
                            value="Casino"
                            color="cyan-darken-2"
                        ></v-checkbox>
                        <v-checkbox
                            v-model="appState.propertyType"
                            label="Golf"
                            value="Golf"
                            color="cyan-darken-2"
                        ></v-checkbox>
                      <v-checkbox
                        v-model="appState.propertyType"
                        label="Wellness & Spa"
                        value="Wellness & Spa"
                        color="cyan-darken-2"
                      ></v-checkbox>
                      </v-col>
              </v-row>
              <v-btn
                  color="cyan-darken-2"
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
.cyan-darken-4 {
  border: 2px solid rgb(0, 188, 212);
}
</style>
