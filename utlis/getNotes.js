export const getNotes = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      return callback(xhr.responseText, null);
    } else {
      return callback(null, xhr.statusText);
    }
  };
  xhr.onerror = () => {
    return callback(null, 'Network error');
  };
  xhr.send();
};
