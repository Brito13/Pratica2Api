document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("contenedor-cartas");
  const cartaTemplate = `
<div class="col-md-3">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Post</a>
       <a href="#" class="btn btn-primary">ToDo</a>
        <a href="#" class="btn btn-primary">Album</a>
    </div>
  </div>
</div>
`;

  let cartas = "";
  Array.from({ length: 10 }).forEach(() => {
    cartas += cartaTemplate;
  });

  contenedor.innerHTML = cartas;
});
