const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");

let cart = [];

function addToCart() {
    const productName = productInput.value.trim();
    const price = Number(priceInput.value);

    if (!productName || isNaN(price) || price <= 0) {
        alert("Fyll i ett produktnamn och ett giltigt pris!");
        return;
    }

    let itemExists = false;

    for (let item of cart) {
        if (item.productName.toLowerCase() === productName.toLowerCase()) {
            item.quantity++;
            itemExists = true;
            break;
        }
    }

    if (!itemExists) {
        cart.push({
            productName: productName,
            price: price,
            quantity: 1,
        });
    }

    productInput.value = "";
    priceInput.value = "";

    renderCart();
}

function renderCart() {
    cartList.innerHTML = ""; 

    for (let item of cart) {
        const li = document.createElement("li");
        li.textContent = `${item.productName} - ${item.price} kr (x${item.quantity})`;
        cartList.appendChild(li);
    }
}

addButton.addEventListener("click", addToCart);
