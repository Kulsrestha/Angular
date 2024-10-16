import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  product = { id: null, name: '', available: false };
  @Output() productAdded = new EventEmitter<void>();

  constructor(private productService: ProductService) {}

  addProduct() {
    if (this.product.name) {
      this.productService.addProduct(this.product);
      this.product = { id: null, name: '', available: false };
      this.productAdded.emit();
    }
  }
}