const input = document.getElementById('spellInput');

const domCallback = (response, input) => {
  console.log('response: ', response);
  let dropDown = document.getElementById('autocompleteList');
  response.forEach(item => {
    const newItem = document.createElement('div');
    newItem.setAttribute('value', item.name);
    dropDown.appendChild(newItem);
  })
  
  
  
  
  
  
  // for (let i = 0; i < input.length; i++) {

  // }

  // this.value.innerHTML = "<strong>" + dropDown[i].substr(0, val.length) + "</strong>";
  // this.value.innerHTML += dropDown[i].substr(val.length);
  // /*insert a input field that will hold the current array item's value:*/
  // this.value.innerHTML += "<input type='hidden' value='" + dropDown[i] + "'>";
  // // map from item to names/defines
  // // use list of names for drop down
};

input.addEventListener('keyup', (e) => {
  makeRequest(e.target.value, domCallback);
});
