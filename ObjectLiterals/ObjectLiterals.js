function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    titleForPrice(title) {
      // titleForPrice: function (title) can omit the 'function' keyword
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}

const inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "JS", price: 15 },
];

const bookshop = createBookShop(inventory);

bookshop.inventoryValue();
bookshop.titleForPrice("Harry Potter");
