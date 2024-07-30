function findProductPrice(products, name) {
  // Your code here
  //linear
  //   for (let i = 0; i < products.length; i++) {
  //     if (name === products[i].name) {
  //       return products[i].price;
  //     }
  //   }
  //   return -1;

  // binary จำไมไ่ด้
  let low = 0;
  let high = products.length + 1;
  let mid = 1;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
