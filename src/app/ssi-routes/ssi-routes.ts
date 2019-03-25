/**
 * @author alain quinones
 */
import {Routes} from '@angular/router';
import {SsiHomeComponent} from '../ssi-home/ssi-home.component';
import {SsiOrganizationComponent} from '../ssi-organization/ssi-organization.component';
import {SsiIncidentComponent} from '../ssi-incident/ssi-incident.component';
import {SsiSafetyEquipmentComponent} from '../ssi-safety-equipment/ssi-safety-equipment.component';
import {SafetyEquipmentCreateComponent} from '../ssi-safety-equipment/components/safety-equipment-create/safety-equipment-create.component';
import {SafetyEquipmentListComponent} from '../ssi-safety-equipment/components/safety-equipment-list/safety-equipment-list.component';

export const ROUTES_CONFIG: Routes = [
  {path: 'home', component: SsiHomeComponent},
  {path: 'organization', component: SsiOrganizationComponent},
  {path: 'incident', component: SsiIncidentComponent},
  {path: 'safety-equipment', component: SsiSafetyEquipmentComponent},
  {path: 'add-safety-equipment', component: SafetyEquipmentCreateComponent},
  {path: 'safety-equipment-list', component: SafetyEquipmentListComponent},
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
