import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { OwnerComponent } from './owner/owner.component';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { OwnerService } from '../core/services/owner.service';
import { OwnerEditComponent } from './owner/owner-edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MainRoutingModule
    ],
    declarations: [
        MainComponent,
        OwnerComponent,
        HomeComponent,
        OwnerEditComponent
    ],
    providers: [OwnerService],
    entryComponents: [OwnerEditComponent]
})
export class MainModule { }
