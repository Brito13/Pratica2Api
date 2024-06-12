const listpost = async (userId) => {
  const respuesta = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const data = await respuesta.json();

  let tableBody = ``;
  data.forEach((post, index) => {
    tableBody += `<tr>
        <td>${post.userId}</td>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
      </tr>`;
  });

  document.getElementById("Table-Post").innerHTML = tableBody;
};

window.addEventListener("load", function () {
  const userId = 1; // Puedes cambiar esto al userId deseado
  listpost(userId);
});
