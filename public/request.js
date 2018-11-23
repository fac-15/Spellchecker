const makeRequest = (inputValue, callback) => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let obj = JSON.parse(xhr.responseText);
      callback(obj);
      //   console.log('request', obj[0]); // successfully logging
    }
  };
  xhr.open('GET', `/search?query=${inputValue}`, true);
  xhr.send();
};

// const objcallback = obj => {
//     console.log(obj[0]);
// }
