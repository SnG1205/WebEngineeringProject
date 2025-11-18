import { displayCommentForm } from './comment-form';
import { searchHighlighter } from './search';
import { mount } from 'svelte';
import Secondary from '../src/components/Secondary.svelte';
import Table from '../src/components/Table.svelte';
import AudioSection from '../src/components/AudioSection.svelte';
import HabitatsSection from '../src/components/HabitatsSection.svelte';
import MoreBears from '../src/components/MoreBears.svelte';
import CommentsSection from '../src/components/CommentsSection.svelte';

const init = async (): Promise<void> => {
  searchHighlighter();
  displayCommentForm();
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
  mount(CommentsSection, {
    target: document.getElementById('comment-section') as Element,
  });
});
