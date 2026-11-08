import { NgModule } from '@angular/core';
import { UnorderedListComponent } from './unordered-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UnorderedListComponent],
  exports: [UnorderedListComponent],
  imports: [CommonModule]
})
export class UnorderedListModule {
}
