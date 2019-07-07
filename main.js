import { renderNotes } from './utlis/renderNotes.js';
import { getNotes } from './utlis/getNotes.js';

let notes = [];

const filters = {
  searchQuery: '',
  all: true,
  done: null,
};

window.addEventListener('load', () => {
  if (!localStorage.getItem('notes')) {
    getNotes('./data/notes.json', (res, err) => {
      if (err) {
        return console.log(`Error: ${err}`);
      }
      localStorage.setItem('notes', res);
    });
  }
  setTimeout(() => {
    notes = JSON.parse(localStorage.getItem('notes'));
    renderNotes(notes, filters);
  }, 50);
});

document.querySelector('#filterNotes').addEventListener('input', e => {
  filters.searchQuery = e.target.value;

  renderNotes(notes, filters);
});

document.querySelector('#newNote').addEventListener('submit', e => {
  e.preventDefault();
  const newNote = {
    title: e.target.elements.newNoteTitle.value,
    text: e.target.elements.newNoteText.value,
    done: false,
  };

  e.target.elements.newNoteTitle.value = '';
  e.target.elements.newNoteText.value = '';
  e.target.elements.newNoteTitle.blur();
  e.target.elements.newNoteText.blur();
  e.target.elements.newNoteSubmit.disabled = true;

  notes.push(newNote);
  localStorage.setItem('notes', JSON.stringify(notes));

  renderNotes(notes, filters);
});

document.querySelector('#newNote').addEventListener('input', () => {
  const newNoteTitle = document.querySelector('#newNoteTitle');
  const newNoteText = document.querySelector('#newNoteText');
  const newNoteSubmit = document.querySelector('#newNoteSubmit');

  if (newNoteTitle.value && newNoteText.value) {
    newNoteSubmit.disabled = false;
  } else {
    newNoteSubmit.disabled = true;
  }
});

document.querySelector('#filterByDone').addEventListener('change', e => {
  if (e.target.value === 'done') {
    filters.all = false;
    filters.done = true;
  } else if (e.target.value === 'undone') {
    filters.all = false;
    filters.done = false;
  } else if (e.target.value === 'all') {
    filters.all = true;
    filters.done = undefined;
  }

  renderNotes(notes, filters);
});
