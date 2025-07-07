import { CommonModule, CurrencyPipe } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, computed, inject, signal } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { debounceTime, distinctUntilChanged } from "rxjs";
import { selectCartItems, selectTotalItems } from "../cart/cart.selectors";
import { addToCart, removeFromCartRequest } from "../cart/cart.actions";
import { CartItem } from "../cart/cart.model";

@Component({
  selector: "app-product-list",
  imports: [CommonModule, CurrencyPipe, HttpClientModule, ReactiveFormsModule],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.scss",
  standalone: true,
})
export class ProductListComponent {
  private http = inject(HttpClient);
  private store = inject(Store);

  products = signal<any[]>([]);
  loading = signal(true);
  searchControl = new FormControl("");
  searchTerm = signal("");
  cartItems = signal<CartItem[]>([]);

  // ✅ Computed signal for filtered data
  filteredProducts = computed(() => {
    const search = this.searchTerm().toLowerCase();
    return this.products().filter((product) =>
      product.title.toLowerCase().includes(search)
    );
  });

  ngOnInit(): void {
    this.http.get("https://fakestoreapi.com/products").subscribe((res: any) => {
      this.products.set(res);
      this.loading.set(false);
    });

    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.searchTerm.set(value || "");
      });

    // Subscribe to the cart items and total items from the store

    this.store.select(selectCartItems).subscribe(items => {
      this.cartItems.set(items);
    });

    this.store.select(selectTotalItems).subscribe((total) => {
      console.log("[Component] Total cart items count:", total);
    });

    
  }

  addToCart(product: any) {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    };
    console.log("[Component] Dispatching addToCart for:", cartItem);
    this.store.dispatch(addToCart({ item: cartItem }));
  }

  removeFromCart(itemId: number) {
  console.log('[Component] Requesting removal of item:', itemId);
    this.store.dispatch(removeFromCartRequest({ itemId }));
  }
}
