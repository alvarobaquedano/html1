const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');

let cartItems = [];
let total = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.getAttribute('data-product-id');
    const product = {
      id: productId,
      name: button.previousElementSibling.previousElementSibling.textContent,
      price: button.previousElementSibling.textContent,
    };
    cartItems.push(product);
    updateCart();
  });
});

function updateCart() {
  cartItemsList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price}`;
    cartItemsList.appendChild(li);
    total += parseFloat(item.price.substring(1));
  });
  cartTotal.textContent = total.toFixed(2);
}
