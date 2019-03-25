/**
 * @author ricardo.veizaga
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {SsiSafetyEquipmentComponent} from './ssi-safety-equipment.component';
import {SafetyEquipmentRootComponent} from './components/safety-equipment-root/safety-equipment-root.component';
import {SafetyEquipmentMainComponent} from './components/safety-equipment-main/safety-equipment-main.component';
import {SafetyEquipmentRoutesModule} from './routes/safety-equipment-routes.module';
import {SafetyEquipmentHttpService} from './services/safety-equipment-http-service';
import {SafetyEquipmentCarouselComponent} from './components/safety-equipment-carousel/safety-equipment-carousel.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {SafetyEquipmentHomeComponent} from './components/safety-equipment-home/safety-equipment-home.component';
import {SafetyEquipmentCreateComponent} from './components/safety-equipment-create/safety-equipment-create.component';
import {SafetyEquipmentItemComponent} from './components/safety-equipment-item/safety-equipment-item.component';
import {SafetyEquipmentListComponent} from './components/safety-equipment-list/safety-equipment-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SsiSafetyEquipmentComponent,
    SafetyEquipmentRootComponent,
    SafetyEquipmentMainComponent,
    SafetyEquipmentCarouselComponent,
    SafetyEquipmentHomeComponent,
    SafetyEquipmentCreateComponent,
    SafetyEquipmentItemComponent,
    SafetyEquipmentListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SafetyEquipmentRoutesModule,
    HttpClientModule,
    FormsModule,
    NgbCarouselModule,
    ReactiveFormsModule
  ],
  exports: [
    SsiSafetyEquipmentComponent,
    SafetyEquipmentRootComponent,
    SafetyEquipmentMainComponent,
    SafetyEquipmentCarouselComponent,
    SafetyEquipmentHomeComponent,
    SafetyEquipmentCreateComponent,
    SafetyEquipmentItemComponent,
    SafetyEquipmentListComponent
  ],
  providers: [
    SafetyEquipmentHttpService
  ]
})
export class SsiSafetyEquipmentModule {
}
