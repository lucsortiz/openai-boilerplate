import { reactive } from 'vue';

export function useStore() {
  const appState = reactive({
    step: 1,
    prompt: '',
    propertyName: '',
    location: '',
    perks: '',
    category: '',
    propertyType: [],
    socialMedia: [],
    marketingPlan: '',
    email: '',
    newsletter: '',
    slogan: '',
  });
  return {
    appState,
  };
}
