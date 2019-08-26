import { OutputPropertiesComponent } from './output-properties/output-properties.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicHubComponent } from './topic-hub/topic-hub.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { TwDataBindingComponent } from './tw-data-binding/tw-data-binding.component';

const routes: Routes = [
  { path: "", component: TopicHubComponent },
  { path: "interpolation", component: InterpolationComponent },
  { path: "prop-binding", component: PropBindingComponent },
  { path: "class-style-binding", component: ClassStyleBindingComponent },
  { path: "event-binding", component: EventBindingComponent },
  { path: "tw-data-binding", component: TwDataBindingComponent },
  { path: "input-properties", component: InputPropertiesComponent },
  { path: "output-properties", component: OutputPropertiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
