import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';
import { ProductDetailsComponent } from "../product-details/product-details.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  selectedProduct: any = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.productService.getProducts();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.loadProducts();
  }

  showProductDetails(product: any) {
    this.selectedProduct = product;
  }

  hideProductDetails() {
    this.selectedProduct = null;
  }

  editProduct(product: any) {
    // Prompt for new product name
    const newName = prompt("Edit Product Name:", product.name);
    // Confirm availability status
    const newAvailability = confirm("Is this product available?");

    if (newName !== null) { // Check if the user pressed 'Cancel'
      product.name = newName; // Update the product name
      product.available = newAvailability; // Update availability status

      // Update the product in the service
      this.productService.updateProduct(product);
      this.loadProducts(); // Reload products to reflect changes
    }
  }
}