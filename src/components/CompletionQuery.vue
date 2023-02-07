<script setup lang="ts">
import { useStore } from '../composables/Usestore';

import { query } from '../utils/query';

const loading = ref(false);
const responseText = ref('');
const prompt = ref('');

const ex4 = ref('');

const store = useStore();

const queryTextRules = [
  (value: string) => {
    if (value?.length > 10) return true;
    return 'Introduce una consulta válida';
  },
];

async function performQuery(params = {}) {
  responseText.value = '';
  loading.value = true;
  const response = await query(params);
  loading.value = false;
  responseText.value = response;
}
</script>

<template>
  <v-card
    :loading="loading"
    title="MarketDirect"
    variant="outlined"
  >
    <v-sheet
      width="300"
      class="mx-auto mb-6"
    >
      <v-form
        fast-fail
        @submit.prevent="performQuery({prompt})"
      >
        <v-textarea
          v-model="prompt"
          label="Introduce aquí tu consulta para la IA"
          variant="outlined"
          :rules="queryTextRules"
        />

        <v-checkbox label="Checkbox" />
        <v-switch label="Switch" />


        <v-btn
          type="submit"
          block
          color="success"
          :disabled="prompt.length <= 10"
          class="mt-2"
        >
          Enviar query
        </v-btn>
      </v-form>
    </v-sheet>
    <div> test {{ store.appState }}</div>
    <transition>
      <template v-if="responseText">
        <div
          class="p-4 border"
        >
          <p>
            {{ responseText }}
          </p>
        </div>
      </template>
    </transition>
    <v-container>
      <v-row no-gutters>
        <v-col
          cols="4"
        >
          <v-checkbox
            v-model="ex4"
            label="red"
            color="red"
            value="red"
            hide-details
          />
        </v-col>
        <v-col
          cols="4"
        >
          <v-sheet class="ma-2 pa-2">
            Two
          </v-sheet>
        </v-col>
        <v-col
          cols="4"
        >
          <v-sheet class="ma-2 pa-2">
            Three
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
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
