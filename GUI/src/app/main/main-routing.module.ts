import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { VisitComponent } from './visit/visit.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [

  {
    path: 'app',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'owners',
        component: OwnerComponent
      },
      {
        path: 'pets',
        component: PetComponent
      },
      {
        path: 'visits',
        component: VisitComponent
      },
      {
        path: 'personnel',
        component: PersonnelComponent
      },
      {
        path: 'schedule',
        component: ScheduleComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
