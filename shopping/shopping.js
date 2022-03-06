const displayLocalStorageCart = () => {
  const cart = getCart();
  for (const name in cart) {
    console.log("cart", cart);
    console.log("name", name);
    displayProduct(name);
  }
};

const addItem = () => {
  const namefield = document.getElementById("product-name");
  const name = namefield.value;
  if (!name) {
    return;
  }
  // display in the ui
  displayProduct(name);
  // add to local storage
  addProductToCart(name);
  /* 
    1. local storage ase ki na check krbo.
        i. jodi thake , taile json.parse kore felbo
        ii. jodi na thake, taile new ekta obj create krbo
        iii. return kore dibo cartObj k

    2. cart ta ke notun item soho set krte hobe
        i. prothom e cart ta ke nibo , orthat getCart() call krbo
        ii. je product ta ase, oita jog kore dibo
        iii. log kore check krte hobe j cart add hoice ki na
        iv. jokhon set krbo, tokhon eke stringify krte hobe
        v. then etake just local storage e set kore dibe

    3. local storage theke information ui te dekhabo
        i. 1st e check krbe cart nam e kichu ase ki na
        ii. cart gula k loop kore felbo (forin)
        iii. cart theke value gula niye, display te bosay dite hobe
  */

  // clear
  namefield.value = "";
};

const displayProduct = (name) => {
  const ul = document.getElementById("products");
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};

const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const addProductToCart = (name) => {
  const cart = getCart();
  if (cart[name]) {
    cart[name] = cart[name] + 1;
  } else {
    cart[name] = 1;
  }
  //   console.log(cart);
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const placeOrder = () => {
  document.getElementById("products").textContent = "";
  localStorage.removeItem("cart");
};

displayLocalStorageCart();
