const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");

let cart = [];

function addToCart() {
    const productName = productInput.value.trim();
    const price = Number(priceInput.value);

    // Inputvalidering
    if (!productName || isNaN(price) || price <= 0) {
        alert("Fyll i produktnamn och ett giltigt pris!");
        return;
    }

    // Kolla om produkten redan finns
    let found = false;
    for (let item of cart) {
        if (item.productName === productName) {
            item.quantity++;
            found = true;
            break;
        }
    }

    // Om den inte finns – lägg till ny produkt
    if (!found) {
        cart.push({
            productName: productName,
            price: price,        // ← KORREKT NAMN!
            quantity: 1
        });
    }

    // Rensa input-fälten
    productInput.value = "";
    priceInput.value = "";

    renderCart();
}

function renderCart() {
    cartList.innerHTML = ""; // Rensa listan först
    for (let item of cart) {
        const li = document.createElement("li");
        // Använd item.price, INTE item.productPrice!
        li.textContent = `${item.productName} - ${item.price} kr (x${item.quantity})`;
        cartList.appendChild(li);
    }
}

addButton.addEventListener("click", addToCart);
