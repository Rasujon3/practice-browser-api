/* 

৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। 
একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। 
তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। 
প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। 
এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 

১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। 
এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে 
তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে। 

*/

const displayLocalStorageCart = () => {
  const cart = getCart();
  for (const item in cart) {
    displayProduct(item, cart[item]);
  }
};

const collectInputValue = () => {
  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("price").value;
  if (!productName && !productPrice) {
    return;
  }

  // display in the ui
  displayProduct(productName, productPrice);

  // add to local storage
  addProductToCart(productName, productPrice);

  // clear input
  document.getElementById("productName").value = "";
  document.getElementById("price").value = "";
};

const displayProduct = (name, price) => {
  const container = document.getElementById("container");
  const li = document.createElement("li");
  li.innerHTML = `
    Name = <span>${name}</span> - Price = <span>${price}</span> $
  `;
  container.appendChild(li);
};

const getCart = () => {
  const cart = localStorage.getItem("carts");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const addProductToCart = (productName, productPrice) => {
  const cart = getCart();

  cart[productName] = productPrice;

  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("carts", cartStringified);
};

displayLocalStorageCart();
