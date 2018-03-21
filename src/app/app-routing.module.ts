import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent }      from './team/team.component';
import {HomeComponent }      from './home/home.component';
const routes: Routes = [
  { path: 'team', component: TeamComponent },
  { path: 'home', component: HomeComponent }
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
