import customers from './customers.js'
// console.log(customers)

let person = [{
  thumbNail: "https://randomuser.me/api/portraits/thumb/women/89.jpg",
  name: "Pauline Hughes",
  email: "pauline.hughes@example.com",
  address: "3747 Elgin St, Roseville, IN 93281"
}]

function listCustomers(personArray) {
  let customerList = document.querySelector('#customer-list');
  console.log(customerList)

  for (let customer of customers) {
    let newCustomer = document.createElement("li");

    let customerText = document.createTextNode(`"${customer.name.first}" located ${customer.location.city} ${customer.location.state}`);
    let address = document.createElement("p");
    address.appendChild(customerText)
    address.classList.add("address", "measure", "lh-copy");
    let customerImage = document.createElement("img");
    customerImage.classList.add("br-20", "h4", "w4", "dib", "ba", "b--black-05", "pa2");
    customerImage.src = `${customer.picture.thumbnail}`;



    let customerEmail = document.createElement("email");
    newCustomer.append(address, customerEmail);
    customerList.append(newCustomer);
    newCustomer.prepend(customerImage);
    newCustomer.classList.add("ph3", "pv3", "bb", "b--light-silver");
  };



}

listCustomers(person);








