document.addEventListener("DOMContentLoaded", (event) => {
  function fetchData(userId, emailID, direccionID, phoneID, websiteID) {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("name").value = data.name;
        document.getElementById("email").value = data.email;
        document.getElementById(
          "direccion"
        ).value = `${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`;
        document.getElementById("phone").value = data.phone;
        document.getElementById("website").value = data.website;
      })
      .catch((error) => console.error("Error:", error));
  }

  fetchData();
  fetchData(2, name1);
});
