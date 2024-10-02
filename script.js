// Hamburger Icon & Menu display for 480px resolution
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navbarLinks = document.getElementById('navbar-links');
    const cartDropdown = document.getElementById('cart-dropdown');

    hamburger.addEventListener('click', function () {
        // Toggle the navbar visibility
        navbarLinks.classList.toggle('open');
        
        // Close the cart dropdown if it's open
        if (cartDropdown.style.display === 'block') {
            cartDropdown.style.display = 'none';
        }
    });
});

// Lightbox Display
let currentSlide = 1;
function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
    showSlide(currentSlide);
}
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
function changeSlide(n) {
    showSlide(currentSlide += n);
}
function setSlide(n) {
    showSlide(currentSlide = n);
}
function showSlide(n) {
    let slides = document.getElementsByClassName("lightbox-slides");
    if (n > slides.length) {
        currentSlide = 1;
    }
    if (n < 1) {
        currentSlide = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlide - 1].style.display = "block";
}
document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('main-product-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxCaption = document.getElementById('lightbox-caption');

    // Function to open lightbox
    function openLightbox(src, caption) {
        lightbox.style.display = 'block'; 
        lightboxImage.src = src; 
        lightboxCaption.textContent = caption; 
    }

    // Add click event to main image
    mainImage.addEventListener('click', function() {
        openLightbox(mainImage.src, mainImage.alt);
    });

    // Close lightbox when clicking on the close button
    lightboxClose.addEventListener('click', function() {
        lightbox.style.display = 'none'; 
    });

    // Close lightbox when clicking anywhere outside the image
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none'; 
        }
    });
});

// Cart  functionality
document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart-icon');
    const cartDropdown = document.getElementById('cart-dropdown');
    const addToCartButton = document.querySelector('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');

    let cartItems = [];

    // Toggle cart dropdown
    cartIcon.addEventListener('click', function() {
        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Add item to cart
    addToCartButton.addEventListener('click', function() {
        const productName = "Fall Limited Edition Sneakers";
        const productPrice = 125.00;
        const productImage = "assets/image-product-1.jpg";
        const quantityInput = document.querySelector('.cart-controls input');
        const quantity = parseInt(quantityInput.value, 10);

        if (quantity > 0) {
            const cartItem = cartItems.find(item => item.name === productName);

            if (cartItem) {
                cartItem.quantity += quantity;
            } else {
                cartItems.push({
                    name: productName,
                    price: productPrice,
                    quantity: quantity,
                    image: productImage
                });
            }
            updateCart(cartItems);
            cartCount.textContent = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        } else {
            alert("Please select a quantity");
        }
    });

    // Update cart display
    function updateCart(items) {
        cartItemsContainer.innerHTML = '';
        items.forEach(item => {
            const cartItemHtml = `
                <div class="cart-item">
                    <div class="item-info">
                        <img src="${item.image}" alt="${item.name}">
                        <div>
                            <p class="item-name">${item.name}</p>
                            <p class="item-price">$${item.price.toFixed(2)} x ${item.quantity} = <strong>$${(item.price * item.quantity).toFixed(2)}</strong></p>
                        </div>
                    </div>
                    <button class="remove-item"><img class="cartimg" src="assets/icon-delete.svg"></button>
                </div>
            `;
            cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHtml);
        });

        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                cartItems.splice(index, 1);
                updateCart(cartItems);
                cartCount.textContent = cartItems.reduce((acc, item) => acc + item.quantity, 0);
                const cartclear = `
                    <p>Your cart is empty!</p>
                `;
                cartItemsContainer.insertAdjacentHTML('beforeend', cartclear);
            });
        });

        document.getElementById('checkout-btn').style.display = items.length ? 'block' : 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let quantityInput = document.querySelector("input[type='number']");
    let decreaseButton = document.querySelector(".decrease");
    let increaseButton = document.querySelector(".increase");
    let addToCartButton = document.querySelector(".add-to-cart");

    // Handle increase button click
    increaseButton.addEventListener("click", () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    // Handle decrease button click
    decreaseButton.addEventListener("click", () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 0) {
            quantityInput.value = currentValue - 1;
        }
    });

    // Handle add to cart click
    addToCartButton.addEventListener("click", () => {
        let quantity = quantityInput.value;
        if (quantity > 0) {
            alert(`Added ${quantity} item(s) to the cart!`);
        } else {
            alert("Please select at least one item.");
        }
    });

    // Thumbnail image click handler
    let thumbnails = document.querySelectorAll(".thumbnail-images img");
    let mainImage = document.querySelector(".main-image");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", (e) => {
            mainImage.src = e.target.src; 
        });
    });
});