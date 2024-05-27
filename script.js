// Tambahkan event listener untuk ikon menu
document.getElementById("menu-icon").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("show");
});

// Tambahkan event listener untuk ikon pencarian
document.getElementById("search-icon").addEventListener("click", function() {
    document.getElementById("search-form").classList.toggle("hidden");
});

// Tambahkan event listener untuk form pencarian
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    var searchTerm = document.getElementById("search-input").value.toLowerCase();
    var products = document.querySelectorAll(".box h3");

    products.forEach(function(product) {
        var productName = product.textContent.toLowerCase();
        var box = product.parentNode;

        if (productName.includes(searchTerm)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.createElement('ul');
    cartItemsList.classList.add('cart-items');
    
    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart');
    const cartHeading = document.createElement('h2');
    cartHeading.textContent = 'Shopping Cart';
    cartContainer.appendChild(cartHeading);
    cartContainer.appendChild(cartItemsList);
    
    document.body.appendChild(cartContainer);

    addToCartButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault(); // Prevent default anchor behavior
            const productId = event.target.getAttribute('data-product-id');
            const productName = event.target.getAttribute('data-product-name');
            const productPrice = event.target.previousElementSibling.textContent;

            addToCart(productId, productName, productPrice);
        });
    });

    function addToCart(productId, productName, productPrice) {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - ${productPrice}`;
        cartItemsList.appendChild(cartItem);
    }
});
