const input = document.getElementById('spellInput');

const domCallback = (response, input) => {
  console.log('response: ', response);
  let dropDown = document.getElementById('autocompleteList');
  response.forEach(item => {
    const newItem = document.createElement('div');
    newItem.setAttribute('value', item.name);
    dropDown.appendChild(newItem);
  })
};

input.addEventListener('keyup', (e) => {
  makeRequest(e.target.value, domCallback);
});
