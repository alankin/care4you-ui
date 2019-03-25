/**
 * @author ricardo.veizaga
 */

import {Routes} from '@angular/router';
import {SafetyEquipmentRootComponent} from '../components/safety-equipment-root/safety-equipment-root.component';
import {SafetyEquipmentMainComponent} from '../components/safety-equipment-main/safety-equipment-main.component';


export const SAFETY_EQUIPMENT_ROUTES_CONFIG: Routes = [
  {
    path: 'safety-equipment',
    component: SafetyEquipmentRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: '', component: SafetyEquipmentMainComponent},
        ]
      },
      {path: '**', redirectTo: ''}
    ]
  }
];
