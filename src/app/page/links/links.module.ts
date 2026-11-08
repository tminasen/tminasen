import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from './component/links.component';
import { HeadingModule } from '../../common/atoms/heading/heading.module';
import { UnorderedListModule } from '../../common/atoms/unordered-list/unordered-list.module';


@NgModule({
  declarations: [LinksComponent],
  imports: [
    CommonModule,
    UnorderedListModule,
    HeadingModule
  ],
  exports: [LinksComponent]
})
export class LinksModule {
}
