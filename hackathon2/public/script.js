// get customer in get method
const getCustomer = () => {
  const id = document.getElementById("customerid").value;
  fetch(`https://maor-hackathon-2.herokuapp.com/customer?cid=${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0]);
      createUserCard(data[0]);
    })
    .catch((e) => {
      console.log(e);
    });
};

function createUserCard(data) {
  let results = document.getElementById("results");
  let customerCard = document.createElement("div");
  customerCard.classList.add("customerCard");
  let customerName = document.createElement("p");
  customerName.innerText = data.first_name + " " + data.last_name;
  customerCard.appendChild(customerName);
  let customerEmail = document.createElement("p");
  customerEmail.innerText = data.email;
  customerCard.appendChild(customerEmail);
  results.appendChild(customerCard);
}
