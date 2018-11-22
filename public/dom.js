const input = document.getElementById('spellInput');

input.addEventListener('keyup', () => {
  makeRequest(input.value);
});
