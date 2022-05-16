import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentOnReady } from '@ionic/core';

import { LocationPickerComponent } from './pickers/location-picker/location-picker.component';

const routes: Routes = [{ path: '', component: LocationPickerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
