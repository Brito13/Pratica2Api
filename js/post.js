const listpost = async (url) => {
  // Extraer el parámetro userId de la Query String
  const urlParams = new URLSearchParams(new URL(url).search);
  const userId = urlParams.get("userId");

  // Hacer la petición a la API con el parámetro userId
  const respuesta = await fetch(url);
  const data = await respuesta.json();

  let tableBody = ``;
  data.forEach((post) => {
    tableBody += `<tr>
        <td>${post.userId}</td>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
      </tr>`;
  });

  document.getElementById("Table-Post").innerHTML = tableBody;
};

// Ejemplo de cómo llamar la función
listpost("https://jsonplaceholder.typicode.com/posts?userId=1");
