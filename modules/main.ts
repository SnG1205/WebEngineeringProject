import { searchHighlighter } from './search';
import { mount } from 'svelte';
import App from '../src/App.svelte';

document.addEventListener('DOMContentLoaded', () => {
  searchHighlighter();
  mount(App, {
    target: document.getElementById('app') as Element,
  });
});
