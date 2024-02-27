const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      postMessage(data)
    })
    .catch((err) => {
      postMessage(err.message);
    });
}

fetchData();
