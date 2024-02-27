function addNewRows(data) {
  const tableBody = document.querySelector('tbody');
  const rows = data.map(user => {
    return `
      <tr>
        <td class="p-2 text-wrap border-2">${user.name}</td>
        <td class="p-2 text-wrap border-2">${user.username}</td>
        <td class="p-2 text-wrap border-2">${user.email}</td>
        <td class="p-2 text-wrap border-2">${user.address.city}</td>
      </tr>
    `;
  });
  tableBody.innerHTML = rows.join('');
}

const getUserInfo = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    addNewRows(data);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

const asyncFetch = function () {
  const table = document.getElementById("userTable");
  table.classList.remove("hide");
  table.classList.add("visible");
  getUserInfo();
}

// Promise method
function getUserInfoUsingPromise() {
   fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      addNewRows(data);
    })
    .catch(error => {
      console.error("Error fetching user data:", error);
    });
}

const promiseFetch = function () {
  const table = document.getElementById("userTable");
  table.classList.remove("hide");
  table.classList.add("visible");
  getUserInfoUsingPromise();
}

const hideTable = function () {
  const table = document.getElementById("userTable");
  table.classList.add("hide");
  table.classList.remove("visible");
}