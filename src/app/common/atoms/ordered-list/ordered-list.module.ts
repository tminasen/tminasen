import { NgModule } from '@angular/core';
import { OrderedListComponent } from './ordered-list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [OrderedListComponent],
  exports: [OrderedListComponent],
  imports: [CommonModule]
})
export class OrderedListModule {
}
