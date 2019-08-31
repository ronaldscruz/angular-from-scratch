import { InputPropertiesModule } from './input-properties/input-properties.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TopicHubComponent } from './topic-hub/topic-hub.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwDataBindingComponent } from './tw-data-binding/tw-data-binding.component';
import { FormsModule } from '@angular/forms';
import { OutputPropertiesComponent } from './output-properties/output-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicHubComponent,
    InterpolationComponent,
    PropBindingComponent,
    ClassStyleBindingComponent,
    EventBindingComponent,
    TwDataBindingComponent,
    OutputPropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    InputPropertiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
