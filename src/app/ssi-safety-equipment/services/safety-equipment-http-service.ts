/**
 * @author ricardo.veizaga
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {SafetyEquipment} from '../api/domain/SafetyEquipment';

@Injectable()
export class SafetyEquipmentHttpService extends BaseHttpService<SafetyEquipment> {

  protected path(): string {
    return '/safetyEquipments';
  }
}
