document.addEventListener("DOMContentLoaded", function () {
  const productContainers = document.querySelectorAll(".product-container");
  const productSummary = document.getElementById("product-summary");
  const subtotalElement = document.getElementById("subtotal");
  const shippingElement = document.getElementById("shipping");
  const taxElement = document.getElementById("tax");
  const totalElement = document.getElementById("total");

  let subtotal = 0;
  const shippingCost = 5000;
  const taxRate = 0.02;

  function updatePaymentDetails() {
    // Reset product summary and subtotal
    productSummary.innerHTML = "";
    subtotal = 0;

    // Iterate through each product container
    productContainers.forEach((container, index) => {
      const productName = container.querySelector(".product-name").innerText;
      const productPrice = parseInt(
        container
          .querySelector(".product-price")
          .innerText.replace("Rp ", "")
          .replace(",", "")
      );
      const productCount = parseInt(
        container.querySelector(".count").innerText
      );

      // Update subtotal
      subtotal += productPrice * productCount;

      // Display product summary
      productSummary.innerHTML += `<div>${productName} x ${productCount}</div>`;
    });

    // Calculate total
    const tax = subtotal * taxRate;
    const total = subtotal + shippingCost + tax;

    // Update payment details elements
    subtotalElement.innerText = `Subtotal: Rp ${subtotal.toLocaleString()}`;
    shippingElement.innerText = `Ongkir: Rp ${shippingCost.toLocaleString()}`;
    taxElement.innerText = `Pajak: ${taxRate * 100}%`;
    totalElement.innerText = `Total: Rp ${total.toLocaleString()}`;
  }

  // Initial update
  updatePaymentDetails();

  // Add event listeners to increment, decrement, and delete buttons
  productContainers.forEach((container, index) => {
    const incrementButton = container.querySelector(".increment");
    const decrementButton = container.querySelector(".decrement");
    const deleteButton = container.querySelector(".delete-button");

    incrementButton.addEventListener("click", function () {
      const countElement = container.querySelector(".count");
      let count = parseInt(countElement.innerText);
      count++;
      countElement.innerText = count;

      // Update payment details when quantity changes
      updatePaymentDetails();
    });

    decrementButton.addEventListener("click", function () {
      const countElement = container.querySelector(".count");
      let count = parseInt(countElement.innerText);

      if (count > 0) {
        count--;
        countElement.innerText = count;

        // Update payment details when quantity changes
        updatePaymentDetails();
      }
    });

    deleteButton.addEventListener("click", function () {
      // Remove the product container when delete button is clicked
      container.remove();

      // Update payment details after removing the product
      updatePaymentDetails();
    });
  });

  // Example product 1
  const productName1 = "Neanthe Bella Palm";
  const productPrice1 = 180000;

  // Example product 2
  const productName2 = "Contoh Produk";
  const productPrice2 = 250000;

  // Example product 3
  const productName3 = "Contoh Produk";
  const productPrice3 = 100000;

  // Display example products in the first three product containers
  productContainers[0].querySelector(".product-name").innerText = productName1;
  productContainers[0].querySelector(
    ".product-price"
  ).innerText = `Rp ${productPrice1.toLocaleString()}`;

  productContainers[1].querySelector(".product-name").innerText = productName2;
  productContainers[1].querySelector(
    ".product-price"
  ).innerText = `Rp ${productPrice2.toLocaleString()}`;

  productContainers[2].querySelector(".product-name").innerText = productName3;
  productContainers[2].querySelector(
    ".product-price"
  ).innerText = `Rp ${productPrice3.toLocaleString()}`;

  // Trigger initial update after setting up example products
  updatePaymentDetails();
});
