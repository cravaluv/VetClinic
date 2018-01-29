import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { AuthGuardService } from './auth-guard.service';
import { RoleGuardService } from './role-guard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthComponent],
  providers: []
})
export class AuthModule {
}
