import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPostComponent, BlogPostsComponent, HomeComponent } from './blog/components';
import { LogicaPageComponent } from './logica/containers';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'posts', component: BlogPostsComponent},
  { path: 'post/:id', component: BlogPostComponent},
  { path: 'logica', component: LogicaPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
