const getNotes = async (url, callback) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => {
      reject('Network error');
    };
    xhr.open('GET', url, true);
    xhr.send();
  });
};

export { getNotes };
