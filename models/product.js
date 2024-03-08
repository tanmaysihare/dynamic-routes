const db = require("../util/database");
const Cart = require("./cart");

module.exports = class Product {
  constructor( id,title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    // Check if any required property is undefined
    if (!this.title || !this.price || !this.imageUrl || !this.description) {
        // Return a rejected promise with an error message
        return Promise.reject(new Error('One or more required properties are undefined',
        console.log('title--',this.title),
        console.log('price--',this.price),
        console.log('imageUrl--',this.imageUrl),
        console.log('description--',this.description)
         ) );
    }

    return db.execute(
        'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
        [this.title, this.price, this.imageUrl, this.description]
    );
}

  static deleteById(id) {}
  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?',[id]);
  }
};
