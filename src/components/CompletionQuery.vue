<script setup lang="ts">
// import { Configuration, OpenAIApi } from "openai";
const loading = ref(false);
// const configuration = new Configuration({
//   organization: "org-EHAglPvzrVAyVpDnb1P9DORS",
//   apiKey: import.meta.env.VITE_OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const responseText = ref('');
const prompt = ref('');
const queryTextRules = [
  (value: string) => {
    if (value?.length > 10) return true;
    return 'Introduce una consulta válida';
  },
];

const DEFAULT_PARAMS = {
  "model": "text-davinci-003",
  "temperature": 0.7,
  "max_tokens": 2048,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0,
};

async function query(params = {}) {
  responseText.value = '';
  const params_ = { ...DEFAULT_PARAMS, ...params };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + String(import.meta.env.VITE_OPENAI_API_KEY)
    },
    body: JSON.stringify(params_)
  };
  loading.value = true;
  const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
  loading.value = false;
  const data = await response.json();
  responseText.value = data.choices[0].text;
}
</script>

<template>
  <v-card
    :loading="loading"
    title="Completion Tester"
    variant="outlined"
  >
    <v-sheet
      width="300"
      class="mx-auto mb-6"
    >
      <v-form
        fast-fail
        @submit.prevent="query({prompt})"
      >
        <v-textarea
          v-model="prompt"
          label="Introduce aquí tu consulta para la IA"
          variant="outlined"
          :rules="queryTextRules"
        />

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
    <transition>
      <template v-if="prompt">
        <div
          class="p-4 border"
        >
          <p>
            {{ responseText }}
          </p>
        </div>
      </template>
    </transition>
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
