import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { OwnerComponent } from './owner/owner.component';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { OwnerService } from '../core/services/owner.service';
import { OwnerEditComponent } from './owner/owner-edit.component';
import {NgbModule, NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';
import { PetComponent } from './pet/pet.component';
import { PetEditComponent } from './pet/pet-edit.component';
import { AnimalService } from '../core/services/animal.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { VisitComponent } from './visit/visit.component';
import { VisitEditComponent } from './visit/visit-edit.component';
import { VisitService } from '../core/services/visit.service';
import { PersonnelComponent } from './personnel/personnel.component';
import { PersonnelEditComponent } from './personnel/personnel-edit.component';
import { PersonnelService } from '../core/services/personnel.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { CalendarModule } from 'angular-calendar';
import { DatepickerAdapterService } from '../ui/services/datepicker-adapter.service';
import { ScheduleComponent } from './schedule/schedule.component';
import { MedicineListComponent } from './visit/medicine-list.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { CommonService } from '../core/services/common.service';
import { CustomerComponent } from './customer/customer.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OwnPetsComponent } from './own-animals/own-pets.component';
import { OwnerAnimalsComponent } from './owner/owner-animals.component';
import { PetVisitsComponent } from './pet/pet-visits.component';
import { AnimalScheduleComponent } from './schedule/animal-schedule.component';
import { AddVisitComponent } from './add-visit/add-visit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MainRoutingModule,
        NgbModule,
        Ng2SearchPipeModule,
        Ng2OrderModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        CalendarModule.forRoot()
    ],
    declarations: [
        MainComponent,
        OwnerComponent,
        HomeComponent,
        OwnerEditComponent,
        PetComponent,
        PetEditComponent,
        VisitComponent,
        VisitEditComponent,
        PersonnelComponent,
        PersonnelEditComponent,
        ScheduleComponent,
        MedicineListComponent,
        DictionaryComponent,
        CustomerComponent,
        ChangePasswordComponent,
        OwnPetsComponent,
        OwnerAnimalsComponent,
        PetVisitsComponent,
        AnimalScheduleComponent,
        AddVisitComponent
    ],
    providers: [OwnerService, AnimalService, VisitService, PersonnelService, CommonService,
     {provide: NgbDateAdapter, useClass: DatepickerAdapterService}],
    entryComponents: [OwnerEditComponent, PetEditComponent, VisitEditComponent, PersonnelEditComponent, DictionaryComponent,
      ChangePasswordComponent, OwnerAnimalsComponent, PetVisitsComponent, MedicineListComponent, AnimalScheduleComponent, AddVisitComponent,
      CustomerComponent]
})
export class MainModule { }
