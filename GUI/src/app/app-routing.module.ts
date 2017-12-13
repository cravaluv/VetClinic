import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './not-found.component';
import { LogonComponent } from './logon/logon.component';

const routes: Routes = [
  {
    path: 'app',
    component: MainComponent,
  },
  {
    path: 'logon',
    component: LogonComponent,
  },
  { path: '',   redirectTo: '/app/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
