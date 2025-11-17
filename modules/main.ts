import { displayCommentForm } from './comment-form';
import { commentToggle } from './comment-toggle';
import { searchHighlighter } from './search';
import { mount } from 'svelte';
import Secondary from '../src/components/Secondary.svelte';
import Table from '../src/components/Table.svelte';
import AudioSection from '../src/components/AudioSection.svelte';
import HabitatsSection from '../src/components/HabitatsSection.svelte';
import MoreBears from '../src/components/MoreBears.svelte';

const init = async (): Promise<void> => {
  searchHighlighter();
  displayCommentForm();
  commentToggle();
};

document.addEventListener('DOMContentLoaded', () => {
  void init();
  mount(Secondary, {
    target: document.getElementById('secondary') as Element,
  });
  mount(Table, {
    target: document.getElementById('table') as Element,
  });
  mount(AudioSection, {
    target: document.getElementById('audio-section') as Element,
  });
  mount(HabitatsSection, {
    target: document.getElementById('habitats-section') as Element,
  });
  mount(MoreBears, {
    target: document.getElementById('more-bears') as Element,
  });
});
