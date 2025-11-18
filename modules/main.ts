import { mount } from 'svelte';
import App from '../src/App.svelte';

document.addEventListener('DOMContentLoaded', () => {
  mount(App, {
    target: document.getElementById('app') as Element,
  });
});
