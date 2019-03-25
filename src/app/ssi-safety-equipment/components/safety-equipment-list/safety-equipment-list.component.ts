import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SafetyEquipmentHttpService} from '../../services/safety-equipment-http-service';
import {SafetyEquipment} from '../../api/domain/SafetyEquipment';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';

@Component({
  selector: 'safety-equipment-list',
  templateUrl: './safety-equipment-list.component.html',
  styleUrls: ['./safety-equipment-list.component.scss']
})
export class SafetyEquipmentListComponent implements OnInit, OnDestroy {

  public safetyEquipments: SafetyEquipment[];

  private _seListSubscription: Subscription;

  constructor(private _safetyEquipmentService: SafetyEquipmentHttpService) {
    this.safetyEquipments = [];
  }

  ngOnInit() {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._seListSubscription);
  }

  private _initialize(): void {
    this._seListSubscription = this._safetyEquipmentService.doFindAll().subscribe(
      (safetyEquipments: SafetyEquipment[]) => {
        this.safetyEquipments = safetyEquipments;
        console.log(safetyEquipments);
      }
    );
  }
}
