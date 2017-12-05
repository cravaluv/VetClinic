import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    path: 'app',
    component: MainComponent,
  },
  { path: '',   redirectTo: '/app', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
