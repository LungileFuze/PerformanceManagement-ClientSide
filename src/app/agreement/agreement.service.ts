import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Subject, catchError, of, switchMap } from "rxjs";
import { Agreement } from "../model/agreement";

@Injectable()
export class AgreementService {
    agreementForm = this._formBuilder.group({
        serviceNumber: ['', Validators.required],
        managerServiceNumber: ['', Validators.required],
        financialYear: ['', Validators.required]
    });
        private _agreementSubject = new Subject<Agreement>();
        private _agreement$ = this._agreementSubject.asObservable();
        constructor(private _httpClient: HttpClient,
            private _formBuilder: FormBuilder){}
        
        createAgreement(agreement: Agreement):void {
            this._agreementSubject.next(agreement);
        }
        agreement$ = this._agreement$.pipe(
            switchMap((agreement: Agreement)=>this._httpClient.post('https://localhost:7123/agreements', agreement)
            .pipe(catchError((err: any) => of(err))))
        )
}