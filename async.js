const getUserInfo = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        addNewRows(data);
      })
  
};
console.log("Working");
getUserInfo();
console.log("After.");

const tableBody = document.querySelector('tbody'); // Get the tbody element

function addNewRows(data) {
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

  tableBody.innerHTML = rows.join(''); // Clear existing rows and add new ones
}


const asyncFetch = function () {
  const table = document.getElementById("userTable");
  table.classList.toggle("hide");
  console.log("hello");
}

