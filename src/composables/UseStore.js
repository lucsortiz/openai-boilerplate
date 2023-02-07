import { reactive } from 'vue';

export function useStore() {
  const appState = reactive({
    step: 1,
    prompt: '',
  });
  return {
    appState,
  };
}
