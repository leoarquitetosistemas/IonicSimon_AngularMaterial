import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    HomePageRoutingModule,
    RouterModule.forChild([{
      path:'',
      component:HomePage
    }]),
    ReactiveFormsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
