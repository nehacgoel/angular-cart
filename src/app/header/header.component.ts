import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTotalItems } from '../cart/cart.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {

  private store = inject(Store);
  totalItems = signal(0);

  ngOnInit() {
    this.store.select(selectTotalItems).subscribe(count => {
      this.totalItems.set(count);
    });
  }
}
