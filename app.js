// script.js
new Vue({
  el: "#app",
  data: {
    products: [
      { id: 1, name: "Product 1", price: 10, count: 0 },
      { id: 2, name: "Product 2", price: 20, count: 0 },
      { id: 3, name: "Product 3", price: 15, count: 0 },
    ],
  },
  methods: {
    updateProduct(id, value) {
      const product = this.products.find((p) => p.id === id);
      product.count = Math.max(product.count + value, 0);
      this.updatePaymentDetails();
    },
    deleteProduct(id) {
      const index = this.products.findIndex((p) => p.id === id);
      this.products.splice(index, 1);
      this.updatePaymentDetails();
    },
    updatePaymentDetails() {
      // Implementation of updatePaymentDetails
    },
    purchase() {
      alert("Purchase Successful!");
    },
  },
  mounted() {
    this.products.forEach((product) => {
      const countElement = document.querySelector(
        `.product[data-id="${product.id}"] .count`
      );
      countElement.textContent = product.count;
    });
    this.updatePaymentDetails();
  },
});
