const input = document.getElementById('spellInput');

const domCallback = (response) => {
  console.log('response: ', response);
  // map from item to names/defines
  // use list of names for drop down
  // OR
  // return names from server
  // when you click one of the names in drop down
  // make new seperate request for that obj
};

input.addEventListener('keyup', (e) => {
  makeRequest(e.target.value, domCallback);
});
