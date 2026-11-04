// Change this number if the business WhatsApp number changes.
// Use country code + number, with no + sign or spaces.
const WHATSAPP_NUMBER = "919205141039";

// Edit these sample products, prices and image paths as the catalogue grows.
const products = [
  { name: "Puma", subtitle: "Black Flip On", price: "₹999", image: "assets/Puma.jpg", tag: "Everyday pick" },
  { name: "Adidas", subtitle: "Running Shoes", price: "₹999", image: "assets/Adidas.jpg", tag: "Customer favourite" }
];

const grid = document.getElementById("productGrid");
grid.innerHTML = products.map((product, index) => {
  const message = encodeURIComponent(`Hi Flex Sporty! I'm interested in the ${product.name} (${product.price}). Please share available sizes, stock and delivery details.`);
  return `<article class="product-card">
    <div class="product-photo">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <span class="product-tag">${product.tag}</span>
    </div>
    <div class="product-info">
      <div><h3>${product.name}</h3><p>${product.subtitle}</p></div>
      <span class="price">${product.price}</span>
    </div>
    <a class="order-link" href="https://wa.me/${WHATSAPP_NUMBER}?text=${message}" target="_blank" rel="noopener">
      <span>Enquire & order on WhatsApp</span><span>↗</span>
    </a>
  </article>`;
}).join("");

document.getElementById("year").textContent = new Date().getFullYear();
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));