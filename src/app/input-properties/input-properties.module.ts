import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';
import { InputPropertiesComponent } from './input-properties.component';



@NgModule({
  declarations: [InputComponent, DisplayComponent, InputPropertiesComponent],
  imports: [
    CommonModule,
  ],
})
export class InputPropertiesModule { }
