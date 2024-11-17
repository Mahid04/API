const productContainer = document.getElementById("products");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const products = data.products;
    products.forEach((product) => {
      productContainer.innerHTML += `
        <div class="product">
          <img src="${product.thumbnail}" alt="${product.title}">
          <div class="icon">
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-regular fa-heart"></i>
          </div>
          <h4>${product.title}</h4>
          <p class="description">${product.description}</p>
          <p class="price">$${product.price}</p>
        </div>
      `;
    });
  });
