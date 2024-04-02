import { Component } from '@angular/core';
import { AgreementService } from './agreement.service';
import { Agreement } from '../model/agreement';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrl: './agreement.component.css',
  providers: [AgreementService]
})
export class AgreementComponent {
  agreement$ = this._agreementService.agreement$;
  agreementForm = this._agreementService.agreementForm;
  constructor(private _agreementService: AgreementService){}

  createAgreement():void{
    const agreement = <Agreement>{
      serviceNumber: this.agreementForm.controls.serviceNumber.value,
      managerServiceNumber: this.agreementForm.controls.managerServiceNumber.value,
      financialYear: this.agreementForm.controls.financialYear.value
    };
    this._agreementService.createAgreement(agreement);
  }
}
