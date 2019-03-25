/**
 * @author ricardo.veizaga
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {SafetyEquipmentHttpService} from '../../services/safety-equipment-http-service';
import {SafetyEquipment} from '../../api/domain/SafetyEquipment';

@Component({
  selector: 'safety-equipment-main',
  templateUrl: './safety-equipment-main.component.html',
  styleUrls: ['./safety-equipment-main.component.scss']
})
export class SafetyEquipmentMainComponent implements OnInit, OnDestroy {

  private _safetyEquipmentSubscription: Subscription;

  constructor(private _safetyEquipmentHttpService: SafetyEquipmentHttpService) {

  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._safetyEquipmentSubscription);
  }

  private _initialize(): void {
    this._safetyEquipmentSubscription = this._safetyEquipmentHttpService.doFindAll().subscribe(
      (safetyEquipment: SafetyEquipment[]) => {
        console.log(safetyEquipment);
      }
    );
  }
}
