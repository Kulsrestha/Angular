import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private storageKey = 'products';

  //loding the products
  getProducts() {
    const products = localStorage.getItem(this.storageKey);
    return products ? JSON.parse(products) : [];
  }

  //adding products to the list
  addProduct(product: any) {
    product.id = this.getNewId();
    const products = this.getProducts();
    products.push(product);
    this.updateLocalStorage(products);
  }

  //updating the product after the edit functionality
  updateProduct(updatedProduct: any) {
    const products = this.getProducts();
    const index = products.findIndex((product: any) => product.id === updatedProduct.id);
    if (index !== -1) {
      products[index] = updatedProduct;
      this.updateLocalStorage(products);
    }
  }


  //deleting a particular product 
  deleteProduct(id: number) {
    let products = this.getProducts();
    products = products.filter((product: any) => product.id !== id);
    this.updateLocalStorage(products);
  }


  //updating the local storge 
  private updateLocalStorage(products: any[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }

  // Generate unique ID based on current timestamp
  private getNewId() {
    return Date.now(); 
  }
}
