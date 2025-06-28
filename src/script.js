const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");

let cart = [];

function addToCart() {
    // lägga till objekt i array
    // objektet består av input värden
    const productName = productInput.value;
    const productPrice = Number(priceInput.value);

    const newProduct = {
        productName: productName,
        productPrice: productPrice,
        quantity: 1,
    };

    let itemExist = false;

    for (item of cart) {
        if (item.productName === productName) {
            item.quantity++;
            itemExist = true;
        }
    }

    if (!itemExist) {
        cart.push(newProduct);
    }

    productInput.value = "";
    priceInput.value = "";

    renderCart();
}

function renderCart() {
    cartList.innerHTML = "";

    for (item of cart) {
        const li = document.createElement("li");
        li.textContent = `${item.productName} - ${item.productPrice}kr (x${item.quantity})`;
        cartList.appendChild(li);
    }
}

addButton.addEventListener("click", () => {
    addToCart();
});
