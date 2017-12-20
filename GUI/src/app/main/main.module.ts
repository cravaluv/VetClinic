import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { OwnerComponent } from './owner/owner.component';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { OwnerService } from '../core/services/owner.service';
import { OwnerEditComponent } from './owner/owner-edit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PetComponent } from './pet/pet.component';
import { PetEditComponent } from './pet/pet-edit.component';
import { AnimalService } from '../core/services/animal.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { VisitComponent } from './visit/visit.component';
import { VisitEditComponent } from './visit/visit-edit.component';
import { VisitService } from '../core/services/visit.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MainRoutingModule,
        NgbModule,
        Ng2SearchPipeModule,
        Ng2OrderModule,
        ReactiveFormsModule
    ],
    declarations: [
        MainComponent,
        OwnerComponent,
        HomeComponent,
        OwnerEditComponent,
        PetComponent,
        PetEditComponent,
        VisitComponent,
        VisitEditComponent
    ],
    providers: [OwnerService, AnimalService, VisitService],
    entryComponents: [OwnerEditComponent, PetEditComponent, VisitEditComponent]
})
export class MainModule { }
