const listpost = async (url) => {
  document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor-cartas");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        let cartas = "";
        users.forEach((user) => {
          const cartaTemplate = `
    <div class="col-md-3 mb-3">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <p class="card-text"><strong>Email:</strong> ${user.email}</p>
        <p class="card-text"><strong>Dirección:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
        <p class="card-text"><strong>Teléfono:</strong> ${user.phone}</p>
        <p class="card-text"><strong>Sitio web:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        <a href="#" class="btn btn-primary">Post</a>
        <a href="#" class="btn btn-primary">ToDo</a>
        <a href="#" class="btn btn-primary">Album</a>
      </div>
    </div>
  </div>
`;
          cartas += cartaTemplate;
        });
        contenedor.innerHTML = cartas;
      })
      .catch((error) => console.error("Error fetching users:", error));
  });
};
