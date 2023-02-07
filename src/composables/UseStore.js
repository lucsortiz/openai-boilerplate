import { reactive } from 'vue';

export const appState = reactive({
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
  tone: '',
  objective: '',
  gender: '',
  travelParty: '',
  ageRange: [0, 99],
  targetLocation: '',
  output: '',
});
