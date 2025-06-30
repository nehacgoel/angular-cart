import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, CurrencyPipe, HttpClientModule, ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  standalone: true
})
export class ProductListComponent {
private http = inject(HttpClient);
  
  products = signal<any[]>([]);
  loading = signal(true);
  searchControl = new FormControl('');
  searchTerm = signal('');

  // ✅ Computed signal for filtered data
  filteredProducts = computed(() => {
    const search = this.searchTerm().toLowerCase();
    return this.products().filter(product =>
      product.title.toLowerCase().includes(search)
    );
  });

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products').subscribe((res: any) => {
      this.products.set(res);
      this.loading.set(false);
    });

    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(value => {
        this.searchTerm.set(value || '');
      });
  }
}
