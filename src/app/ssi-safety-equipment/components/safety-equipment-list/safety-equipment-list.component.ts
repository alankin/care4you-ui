import {Component, OnInit} from '@angular/core';
import {Incident} from '../../../ssi-incident/api/domain/Incident';
import {Subscription} from 'rxjs';
import {SafetyEquipmentHttpService} from '../../services/safety-equipment-http-service';
import {SafetyEquipment} from '../../api/domain/SafetyEquipment';

@Component({
  selector: 'safety-equipment-list',
  templateUrl: './safety-equipment-list.component.html',
  styleUrls: ['./safety-equipment-list.component.scss']
})
export class SafetyEquipmentListComponent implements OnInit {

  private _seListSubscription: Subscription;

  constructor(private _safetyEquipmentService: SafetyEquipmentHttpService) {
  }

  ngOnInit() {
  }

  private _initialize(): void {
    this._seListSubscription = this._safetyEquipmentService.doFindAll().subscribe(
      (safetyEquipments: SafetyEquipment[]) => {
        console.log(safetyEquipments);
      }
    );
  }
}
