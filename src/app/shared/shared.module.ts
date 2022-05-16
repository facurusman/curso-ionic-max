import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { LocationPickerComponent } from './pickers/location-picker/location-picker.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LocationPickerComponent, MapModalComponent],
  exports: [LocationPickerComponent, MapModalComponent],
  entryComponents: [MapModalComponent],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class SharedModule {}
