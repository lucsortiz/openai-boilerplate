<script setup lang="ts">
import { useStore } from '~/composables/UseStore';
const loading = ref(false);
const valid = ref(true);
const store =useStore();
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
                      v-model="store.appState.propertyName"
                      label="Property Name"
                      required
                  ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="12"
                >
                  <v-text-field
                      v-model="store.appState.location"
                      label="Describe the location of your hotel"
                      required
                  ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="12"
                >
                  <v-text-field
                      v-model="store.appState.perks"
                      label="Describe the perks of your hotel"
                      required
                  ></v-text-field>

                  <v-select
                      v-model="store.appState.category"
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
                      v-model="store.appState.propertyType"
                      label="Adults Only"
                      value="Adults Only"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="store.appState.propertyType"
                      label="Beach"
                      value="Beach"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="store.appState.propertyType"
                      label="City"
                      value="City"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="store.appState.propertyType"
                      label="Hostel"
                      value="Hostel"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="store.appState.propertyType"
                      label="Resort"
                      value="Resort"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="store.appState.propertyType"
                      label="Wellness & Spa"
                      value="Wellness & Spa"
                  ></v-checkbox>
                </v-col>
                  <v-col
                        cols="3">
                  <v-checkbox
                      v-model="store.appState.propertyType"
                      label="Airport Hotel"
                      value="Airport Hotel"
                  ></v-checkbox>
                    <v-checkbox
                        v-model="store.appState.propertyType"
                        label="Boutique"
                        value="Boutique"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="store.appState.propertyType"
                        label="Conference"
                        value="Conference"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="store.appState.propertyType"
                        label="Leisure"
                        value="Leisure"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="store.appState.propertyType"
                        label="Single Apartment"
                        value="Single Apartment"
                    ></v-checkbox>
                  </v-col>
                  <v-col
                        cols="3">
                    <v-checkbox
                        v-model="store.appState.propertyType"
                        label="Apart Hotel"
                        value="Apart Hotel"
                    ></v-checkbox>
                      <v-checkbox
                          v-model="store.appState.propertyType"
                          label="Business"
                          value="Business"
                      ></v-checkbox>
                      <v-checkbox
                          v-model="store.appState.propertyType"
                          label="Family"
                          value="Family"
                      ></v-checkbox>
                      <v-checkbox
                          v-model="store.appState.propertyType"
                          label="Luxury"
                          value="Luxury"
                      ></v-checkbox>
                      <v-checkbox
                          v-model="store.appState.propertyType"
                          label="Sky Resort"
                          value="Sky Resort"
                      ></v-checkbox>
                    </v-col>
                  <v-col
                        cols="3">
                      <v-checkbox
                          v-model="store.appState.propertyType"
                          label="B&B"
                          value="B&B"
                      ></v-checkbox>
                        <v-checkbox
                            v-model="store.appState.propertyType"
                            label="Casino"
                            value="Casino"
                        ></v-checkbox>
                        <v-checkbox
                            v-model="store.appState.propertyType"
                            label="Golf"
                            value="Golf"
                        ></v-checkbox>
                        <v-checkbox
                            v-model="store.appState.propertyType"
                            label="Golf"
                            value="Golf"
                        ></v-checkbox>
                      </v-col>
                </v-row>
              </v-row>
            </v-container>
      </v-form>
    </v-sheet>
  </v-card>
  <div>{{store}}</div>
</template>

<style scoped>
a {
  color: #42b983;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
