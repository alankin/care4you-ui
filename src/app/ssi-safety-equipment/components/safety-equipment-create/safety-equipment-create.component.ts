import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SafetyEquipmentHttpService} from '../../services/safety-equipment-http-service';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Subscription} from 'rxjs';
import {SafetyEquipment, SafetyEquipmentDTO} from '../../api/domain/SafetyEquipment';

@Component({
  selector: 'safety-equipment-create',
  templateUrl: './safety-equipment-create.component.html',
  styleUrls: ['./safety-equipment-create.component.scss']
})
export class SafetyEquipmentCreateComponent implements OnInit, OnDestroy {

  public saFormGroup: FormGroup;
  public safetyEquioment: SafetyEquipment;

  private _saCreateSubscription: Subscription;

  constructor(private _seService: SafetyEquipmentHttpService,
              private _formBuilder: FormBuilder,
              private _router: Router) {
    this._initForm();
  }

  ngOnInit() {
  }

  public ngOnDestroy(): void {
    unsubscribe(this._saCreateSubscription);
  }

  private _initForm(): void {
    this.saFormGroup = this._formBuilder.group({
      name: [null, [Validators.required]],
      code: [null],
      description: [null],
      stock: [null]
    });
  }

  public onSubmit(): void {
    const saCreateDTO: SafetyEquipmentDTO = this.saFormGroup.value;
    this._saCreateSubscription = this._seService.doInsert(saCreateDTO).subscribe(
      (saCreated: SafetyEquipment) => {
        this.safetyEquioment = saCreated;
        this._router.navigate(['/safety-equipments']);
      }
    );
  }

}
