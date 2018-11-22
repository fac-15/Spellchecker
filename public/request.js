const makeRequest = (inputValue) => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let obj = JSON.parse(xhr.responseText);
      console.log('request', obj[0]); // successfully logging
      let nameArr = obj.map((item) => {
        if (item.name) {
          return item.name;
        } else {
          return item.define;
        }
      });
      let filteredNames = nameArr.filter((key) => {
        if (key[0].indexOf(inputValue) !== -1) {
          return key;
        }
      });
      return filteredNames;
    }
  };
  xhr.open('GET', `/search?query=${inputValue}`, true);
  xhr.send();
};

// const objcallback = obj => {
//     console.log(obj[0]);
// }
