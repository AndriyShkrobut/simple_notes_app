const haveToDo = notes => {
  const numberOfNotesToDo = notes.filter(note => !note.done).length;
  let haveToDoHeader = document.querySelector('#thingsToDo');

  if (!haveToDoHeader) {
    haveToDoHeader = document.createElement('h1');
    haveToDoHeader.setAttribute('id', 'thingsToDo');
    document.querySelector('.notes').before(haveToDoHeader);
  }
  haveToDoHeader.textContent = `You have ${numberOfNotesToDo} things todo!`;
};

export { haveToDo };
