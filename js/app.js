document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("contenedor-cartas");
  const postsContainer = document.getElementById("posts");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      let cartas = "";
      // Replicar usuarios para alcanzar 19 cartas
      let allUsers = [];
      while (allUsers.length < 19) {
        allUsers = allUsers.concat(users);
      }
      allUsers = allUsers.slice(0, 19); // Recortar la lista a 19 usuarios

      allUsers.forEach((user) => {
        const cartaTemplate = `
            <div class="col-md-3 mb-3">
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${user.name}</h5>
                  <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                  <p class="card-text"><strong>Dirección:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                  <p class="card-text"><strong>Teléfono:</strong> ${user.phone}</p>
                  <p class="card-text"><strong>Sitio web:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                  <a href="/Usuario1/post.html?userId=${user.id}" class="btn btn-primary post-link" data-userid="${user.id}">Post</a>
                  <a href="#" class="btn btn-primary todo-link" data-userid="${user.id}">ToDo</a>
                  <a href="#" class="btn btn-primary">Album</a>
                </div>
              </div>
            </div>
          `;
        cartas += cartaTemplate;
      });

      contenedor.innerHTML = cartas;

      // Agregar event listeners a los enlaces de "ToDo"
      const todoLinks = document.querySelectorAll(".todo-link");
      todoLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          const userId = event.target.getAttribute("data-userid");
          fetchPostsByUser(userId);
        });
      });
    })
    .catch((error) => console.error("Error fetching users:", error));

  const fetchPostsByUser = async (userId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      if (response.ok) {
        const posts = await response.json();
        displayPosts(posts);
      } else {
        console.error(`Error al acceder a la API: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error en la solicitud: ${error}`);
    }
  };

  const displayPosts = (posts) => {
    postsContainer.innerHTML = "";
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "col-md-4 mb-3";
      postElement.innerHTML = `
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.body}</p>
            </div>
          </div>
        `;
      postsContainer.appendChild(postElement);
    });
  };
});
