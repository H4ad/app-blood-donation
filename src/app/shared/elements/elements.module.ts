import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ButtonLeftIconComponent } from '../../components/button-left-icon/button-left-icon.component';
import { CardWithActionComponent } from '../../components/card-with-action/card-with-action.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    CardWithActionComponent,
    ButtonLeftIconComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    DirectivesModule,
  ],
  exports: [
    CardWithActionComponent,
    ButtonLeftIconComponent,
  ]
})

export class ElementsModule { }
