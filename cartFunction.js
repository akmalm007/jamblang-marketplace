// Mendapatkan lebar layar pengguna
var screenWidth = window.screen.width;

// Menyimpan lebar layar dalam variabel CSS
document.documentElement.style.setProperty(
  "--screen-width",
  screenWidth + "px"
);

const products = [
  { id: 1, name: "Neanthe Bella Palm", price: 180000 },
  { id: 2, name: "Contoh Produk", price: 250000 },
  { id: 3, name: "Contoh Produk", price: 100000 },
];

function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

function updateProductDetails(productId, count) {
  const totalElement = document.querySelector(
    `.product-row[data-id="${productId}"] .total-price`
  );
  const product = products.find((product) => product.id === productId);
  const totalPrice = product.price * count;
  totalElement.textContent = `${formatRupiah(totalPrice)}`;

  updatePaymentDetails();
}

function updatePaymentDetails() {
  const productSummaryElement = document.getElementById("product-summary");
  const subtotalElement = document.getElementById("subtotal");
  const shippingElement = document.getElementById("shipping");
  const taxElement = document.getElementById("tax");
  const totalElement = document.getElementById("total");

  let productSummaryHTML = "";
  let subtotal = 0;

  products.forEach((product) => {
    const countElement = document.querySelector(
      `.product-row[data-id="${product.id}"] .count`
    );
    const count = parseInt(countElement.textContent);

    if (count > 0) {
      const productTotal = product.price * count;
      subtotal += productTotal;
      productSummaryHTML += `<div>${product.name} x ${count} = ${formatRupiah(
        productTotal
      )}</div>`;
    }
  });

  productSummaryElement.innerHTML = productSummaryHTML;

  const shippingCost = 5000; // Assume flat shipping cost
  const taxRate = 0.1; // 10% tax rate
  const shipping = subtotal > 0 ? shippingCost : 0;
  const taxAmount = subtotal > 0 ? subtotal * taxRate : 0;
  const total = subtotal + shipping + taxAmount;

  subtotalElement.textContent = `Subtotal: ${formatRupiah(subtotal)}`;
  shippingElement.textContent = `Shipping: ${formatRupiah(shipping)}`;
  taxElement.textContent = `Tax: ${formatRupiah(taxAmount.toFixed(2))}`;
  totalElement.textContent = ` ${formatRupiah(total.toFixed(2))}`;
}

products.forEach((product) => {
  const productElement = document.querySelector(
    `.product-row[data-id="${product.id}"]`
  );
  const incrementButton = productElement.querySelector(".increment");
  const decrementButton = productElement.querySelector(".decrement");
  const deleteButton = productElement.querySelector(".delete-button");

  let count = 0;

  incrementButton.addEventListener("click", () => {
    count++;
    productElement.querySelector(".count").textContent = count;
    updateProductDetails(product.id, count);
  });

  decrementButton.addEventListener("click", () => {
    if (count > 0) {
      count--;
      productElement.querySelector(".count").textContent = count;
      updateProductDetails(product.id, count);
    }
  });

  deleteButton.addEventListener("click", () => {
    deleteProduct(product.id);
  });
});

document.getElementById("buy-button").addEventListener("click", () => {
  alert("Purchase Successful!");
});

function deleteProduct(productId) {
  const productElement = document.querySelector(
    `.product-row[data-id="${productId}"]`
  );
  productElement.remove();
  updatePaymentDetails();
}

var expandButton = document.querySelector(".expand-button");
var paymentDetails = document.getElementById("payment-details");

expandButton.addEventListener("click", function () {
  // Toggle class untuk merubah ukuran elemen
  paymentDetails.classList.toggle("expanded");

  // Toggle class untuk merubah rotasi tombol
  expandButton.classList.toggle("rotate-down");
});
