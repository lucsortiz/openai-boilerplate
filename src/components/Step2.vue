<script setup lang="ts">
import { useStore } from '~/composables/UseStore';
const loading = ref(false);
const valid = ref(true);
const store =useStore();
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
        fast-fail
        v-model="valid"
        @submit.prevent="console.log('submit')"
      >
            <v-container>
              <v-row no-gutters>
                  <h3>Social Media</h3>
                <v-row>
                    <v-col cols="6">
                      <v-checkbox
                          v-model="store.appState.socialMedia"
                          label="Facebook"
                          value="Facebook"
                      ></v-checkbox>
                      <v-checkbox
                          v-model="store.appState.socialMedia"
                          label="Instagram"
                          value="Instagram"
                      ></v-checkbox>
                      <v-checkbox
                          v-model="store.appState.socialMedia"
                          label="Twitter"
                          value="Twitter"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="6">
                      <v-checkbox
                          v-model="store.appState.socialMedia"
                          label="TikTok"
                          value="TikTok"
                      ></v-checkbox>
                      <v-checkbox
                          v-model="store.appState.socialMedia"
                          label="Linkedin"
                          value="Linkedin"
                      ></v-checkbox>
                    </v-col>
                </v-row>
              </v-row>
              <v-checkbox
                  v-model="store.appState.marketingPlan"
                  label="Marketing Plan"
                  value="true"
              ></v-checkbox>
              <v-checkbox
                  v-model="store.appState.email"
                  label="Email"
                  value="true"
              ></v-checkbox>
              <v-checkbox
                  v-model="store.appState.newsletter"
                  label="Newsletter"
                  value="true"
              ></v-checkbox>
              <v-checkbox
                  v-model="store.appState.slogan"
                  label="Slogan"
                  value="true"
              ></v-checkbox>
              <v-select>

              </v-select>
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
