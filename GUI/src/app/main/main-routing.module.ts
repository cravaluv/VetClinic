import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { VisitComponent } from './visit/visit.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AuthGuardService as AuthGuard } from '../auth/auth-guard.service';
import { RoleGuardService as RoleGuard } from '../auth/role-guard.service';
import { CustomerComponent } from './customer/customer.component';
import { OwnPetsComponent } from './own-animals/own-pets.component';

const routes: Routes = [

  {
    path: 'app',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'owners',
        component: OwnerComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'employee'
        }
      },
      {
        path: 'pets',
        component: PetComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'employee'
        }
      },
      {
        path: 'visits',
        component: VisitComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'employee'
        }
      },
      {
        path: 'personnel',
        component: PersonnelComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'employee'
        }
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'employee'
        }
      },
      {
        path: 'customer',
        component: CustomerComponent,
        canActivate: [AuthGuard],
        data: {
          expectedRole: 'customer'
        }
      },
      {
        path: 'my-pets',
        component: OwnPetsComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'customer'
        }
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
