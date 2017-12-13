import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MainRoutingModule,
        NgbModule
    ],
    declarations: [
        MainComponent,
        OwnerComponent,
        HomeComponent,
        OwnerEditComponent,
        PetComponent,
        PetEditComponent
    ],
    providers: [OwnerService, AnimalService],
    entryComponents: [OwnerEditComponent, PetEditComponent]
})
export class MainModule { }
