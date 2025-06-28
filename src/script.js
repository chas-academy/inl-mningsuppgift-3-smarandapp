const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");

let cart = [];

function addToCart() {
    const productName = productInput.value;
    const price = Number(priceInput.value);

    if (!productName || isNaN(price) || price <= 0) {
        return;
    }

    let found = false;
    for (let item of cart) {
        if (item.productName === productName) {
            item.quantity++;
            found = true;
            break;
        }
    }
    if (!found) {
        cart.push({
            productName: productName,
            price: price,
            quantity: 1
        });
    }

    productInput.value = "";
    priceInput.value = "";

    renderCart();
}

function renderCart() {
    cartList.innerHTML = "";
    for (let item of cart) {
       
        cartList.innerHTML += `<li>Produktnamn: ${item.productName}, Pris: ${item.price} kr, Antal: ${item.quantity}</li>`;
    }
}

addButton.addEventListener("click", addToCart);
