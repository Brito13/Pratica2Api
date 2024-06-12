document.addEventListener("DOMContentLoaded", (event) => {
  function fetchData(userId, nameID, emailID, direccionID, phoneID, websiteID) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(nameID).value = data.name;
        document.getElementById(emailID).value = data.email;
        document.getElementById(
          direccionID
        ).value = `${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`;
        document.getElementById(phoneID).value = data.phone;
        document.getElementById(websiteID).value = data.website;
      })
      .catch((error) =>
        console.error(`Error fetching data for user ${userId}:`, error)
      );
  }

  const elements = [
    {
      userId: 1,
      nameID: "name",
      emailID: "email",
      direccionID: "direccion",
      phoneID: "phone",
      websiteID: "website",
    },
    {
      userId: 2,
      nameID: "name2",
      emailID: "email2",
      direccionID: "direccion2",
      phoneID: "phone2",
      websiteID: "website2",
    },
    {
      userId: 3,
      nameID: "name3",
      emailID: "email3",
      direccionID: "direccion3",
      phoneID: "phone3",
      websiteID: "website3",
    },
    {
      userId: 4,
      nameID: "name4",
      emailID: "email4",
      direccionID: "direccion4",
      phoneID: "phone4",
      websiteID: "website4",
    },
    {
      userId: 5,
      nameID: "name5",
      emailID: "email5",
      direccionID: "direccion5",
      phoneID: "phone5",
      websiteID: "website5",
    },
    {
      userId: 6,
      nameID: "name6",
      emailID: "email6",
      direccionID: "direccion6",
      phoneID: "phone6",
      websiteID: "website6",
    },
    {
      userId: 7,
      nameID: "name7",
      emailID: "email7",
      direccionID: "direccion7",
      phoneID: "phone7",
      websiteID: "website7",
    },
    {
      userId: 8,
      nameID: "name8",
      emailID: "email8",
      direccionID: "direccion8",
      phoneID: "phone8",
      websiteID: "website8",
    },
    {
      userId: 9,
      nameID: "name9",
      emailID: "email9",
      direccionID: "direccion9",
      phoneID: "phone9",
      websiteID: "website9",
    },
    {
      userId: 10,
      nameID: "name10",
      emailID: "email10",
      direccionID: "direccion10",
      phoneID: "phone10",
      websiteID: "website10",
    },
  ];

  elements.forEach((element) => {
    fetchData(
      element.userId,
      element.nameID,
      element.emailID,
      element.direccionID,
      element.phoneID,
      element.websiteID
    );
  });
});
