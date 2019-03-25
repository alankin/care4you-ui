/**
 * @author ricardo.veizaga
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SAFETY_EQUIPMENT_ROUTES_CONFIG} from './safety-equipment-routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SAFETY_EQUIPMENT_ROUTES_CONFIG)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SafetyEquipmentRoutesModule {
}
