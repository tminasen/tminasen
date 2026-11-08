import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './component/top.component';
import { ProfileComponent } from './component/profile/profile.component';
import { OrderedListModule } from '../../common/atoms/ordered-list/ordered-list.module';
import { UnorderedListModule } from '../../common/atoms/unordered-list/unordered-list.module';
import { SkillComponent } from './component/skill/skill.component';
import { HeadingModule } from '../../common/atoms/heading/heading.module';

@NgModule({
  declarations: [TopComponent, ProfileComponent, SkillComponent],
  imports: [
    CommonModule,
    OrderedListModule,
    UnorderedListModule,
    HeadingModule
  ],
  exports: [TopComponent]
})
export class TopModule {
}
