import { haveToDo } from './haveToDo.js';

const renderNotes = (notes, filters) => {
  const notesContainer = document.querySelector('.notes');
  notesContainer.innerHTML = '';

  const { searchQuery, all, done } = filters;

  const notesToRender = notes.filter(note => {
    const searchMath = note.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const wheterDone = all ? true : note.done === done;

    return searchMath && wheterDone;
  });

  notesToRender.forEach(note => {
    const title = document.createElement('h2');
    title.textContent = note.title;

    const text = document.createElement('h3');
    text.textContent = note.text;

    const listItem = document.createElement('li');
    listItem.append(title, text);

    notesContainer.appendChild(listItem);
  });
  haveToDo(notesToRender);
};

export { renderNotes };
