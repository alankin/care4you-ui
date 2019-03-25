/**
 * @author alain quinones
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES_CONFIG} from './ssi-routes';
import {SsiHomeModule} from '../ssi-home/ssi-home.module';
import {SsiOrganizationModule} from '../ssi-organization/ssi-organization.module';
import {SsiIncidentModule} from '../ssi-incident/ssi-incident.module';
import {SsiSafetyEquipmentModule} from '../ssi-safety-equipment/ssi-safety-equipment.module';


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES_CONFIG),
    SsiHomeModule,
    SsiOrganizationModule,
    SsiIncidentModule,
    SsiSafetyEquipmentModule
  ],
  exports: [RouterModule]
})
export class SsiRoutesModule {

}
