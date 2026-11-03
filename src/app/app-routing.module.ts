import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './page/top/component/top.component';
import { LinksComponent } from './page/links/component/links.component';


export const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'link', component: LinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
