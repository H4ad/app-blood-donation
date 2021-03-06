import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ElementsModule } from '../../shared/elements/elements.module';
import { LoginPage } from './login.page';

const routes: Routes = [
  { path: '', component: LoginPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ElementsModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
