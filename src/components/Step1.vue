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
                  ></v-text-field>

                  <v-select
                      v-model="appState.category"
                      label="Category"
                      :items="['5*', '4*', '3*', '2*', '1*', 'Other']"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row no-gutters>
                  <h3>Property Type</h3>
                  <h5>You can choose more than one:</h5>
                <v-row>
                  <v-col
                    cols="3">
                  <v-checkbox
                      v-model="appState.propertyType"
                      label="Adults Only"
                      value="Adults Only"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="appState.propertyType"
                      label="Beach"
                      value="Beach"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="appState.propertyType"
                      label="City"
                      value="City"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="appState.propertyType"
                      label="Hostel"
                      value="Hostel"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="appState.propertyType"
                      label="Resort"
                      value="Resort"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="appState.propertyType"
                      label="Wellness & Spa"
                      value="Wellness & Spa"
                  ></v-checkbox>
                </v-col>
                  <v-col
                        cols="3">
                  <v-checkbox
                      v-model="appState.propertyType"
                      label="Airport Hotel"
                      value="Airport Hotel"
                  ></v-checkbox>
                    <v-checkbox
                        v-model="appState.propertyType"
                        label="Boutique"
                        value="Boutique"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="appState.propertyType"
                        label="Conference"
                        value="Conference"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="appState.propertyType"
                        label="Leisure"
                        value="Leisure"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="appState.propertyType"
                        label="Single Apartment"
                        value="Single Apartment"
                    ></v-checkbox>
                  </v-col>
                  <v-col
                        cols="3">
                    <v-checkbox
                        v-model="appState.propertyType"
                        label="Apart Hotel"
                        value="Apart Hotel"
                    ></v-checkbox>
                      <v-checkbox
                          v-model="appState.propertyType"
                          label="Business"
                          value="Business"
                      ></v-checkbox>
                      <v-checkbox
                          v-model="appState.propertyType"
                          label="Family"
                          value="Family"
                      ></v-checkbox>
                      <v-checkbox
                          v-model="appState.propertyType"
                          label="Luxury"
                          value="Luxury"
                      ></v-checkbox>
                      <v-checkbox
                          v-model="appState.propertyType"
                          label="Sky Resort"
                          value="Sky Resort"
                      ></v-checkbox>
                    </v-col>
                  <v-col
                        cols="3">
                      <v-checkbox
                          v-model="appState.propertyType"
                          label="B&B"
                          value="B&B"
                      ></v-checkbox>
                        <v-checkbox
                            v-model="appState.propertyType"
                            label="Casino"
                            value="Casino"
                        ></v-checkbox>
                        <v-checkbox
                            v-model="appState.propertyType"
                            label="Golf"
                            value="Golf"
                        ></v-checkbox>
                        <v-checkbox
                            v-model="appState.propertyType"
                            label="Golf"
                            value="Golf"
                        ></v-checkbox>
                      </v-col>
                </v-row>
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
