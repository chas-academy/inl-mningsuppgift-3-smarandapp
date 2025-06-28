const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");

let cart = [];

function addToCart() {
    const productName = productInput.value;
    const price = Number(priceInput.value);

    // Inputvalidering (kan tas bort om läraren inte kräver det)
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
            price: price,
            quantity: 1
        });
    }

    // Rensa input-fälten
    productInput.value = "";
    priceInput.value = "";

    renderCart();
}

function renderCart() {
    // Rensa listan först
    cartList.innerHTML = "";

    // Lägg till alla produkter
    for (let item of cart) {
        const li = document.createElement("li");
        li.textContent = `${item.productName} - ${item.price} kr (x${item.quantity})`;
        cartList.appendChild(li);
    }
}

// Eventlyssnare på knappen
addButton.addEventListener("click", addToCart);
