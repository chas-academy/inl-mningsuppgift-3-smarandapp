const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");

let cart = [];

function addToCart() {
    const productName = productInput.value.trim();
    const productPrice = Number(priceInput.value);

    if (!productName || !productPrice) {
        alert("Fyll i både produktnamn och pris!");
        return;
    }

    let itemExists = false;

    for (const item of cart) {
        if (item.productName === productName) {
            item.quantity++;
            itemExists = true;
            break; 
        }
    }

    if (!itemExists) {
        const newProduct = {
            productName: productName,
            productPrice: productPrice,
            quantity: 1,
        };
        cart.push(newProduct);
    }

    productInput.value = "";
    priceInput.value = "";

    renderCart();
}

function renderCart() {
    cartList.innerHTML = ""; 
    for (const item of cart) {
        const li = document.createElement("li");
        li.textContent = `${item.productName} - ${item.productPrice} kr (x${item.quantity})`;
        cartList.appendChild(li);
    }
}

addButton.addEventListener("click", () => {
    addToCart();
});
