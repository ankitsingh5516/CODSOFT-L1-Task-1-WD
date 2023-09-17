const products = [{
        id: 1,
        name: "Cutter Machine",
        price: 2700.00,
        image: "jai.jpg",
    },
    {
        id: 2,
        name: "Hilti Machine",
        price: 6599.00,
        image: "product2.jpg",
    },
    {
        id: 3,
        name: "Hammer Machine",
        price: 2150.00,
        image: "ankitsinghj.jpg",
    }, {
        id: 4,
        name: "LED Bulb 15w",
        price: 180.00,
        image: "product2.jpg",
    },
    {
        id: 5,
        name: "Door BEll",
        price: 200.00,
        image: "product2.jpg",
    },
    {
        id: 6,
        name: "Hand Blander",
        price: 750.00,
        image: "product2.jpg",
    },
    {
        id: 7,
        name: "Iron (USHA)",
        price: 550.00,
        image: "product2.jpg",
    },
    {
        id: 8,
        name: "Drill Machine 13mm (L/R)",
        price: 1400.00,
        image: "product2.jpg",
    },
    {
        id: 9,
        name: "Drill Machine 10mm",
        price: 800.00,
        image: "product2.jpg",
    },
    {
        id: 10,
        name: "Glinder (CP 1600W)",
        price: 2200.00,
        image: "product2.jpg",
    },

];
const cart = [];

function displayProducts() {
    const productsContainer = document.querySelector(".products");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rs ${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.name} - Rs ${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
}
document.addEventListener("click", event => {
    if (event.target.classList.contains("add-to-cart")) {
        const productId = parseInt(event.target.getAttribute("data-id"));
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            updateCart();
        }
    }
});
const checkoutButton = document.getElementById("checkout");
checkoutButton.addEventListener("click", () => {
    alert("Thank you for your purchase!");
    cart.length = 0;
    updateCart();
});
displayProducts();

function initMap() {
    const map = new google.maps.Map(document.getElementById('google-map'), {
        center: { lat: 28.61255, lng: 77.48963 },
        zoom: 15,
    });
}
