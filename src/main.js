import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'Cristian',
    lastName: 'Perez'
  }
});

export default app;