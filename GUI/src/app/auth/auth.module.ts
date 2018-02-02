import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { AuthGuardService } from './auth-guard.service';
import { RoleGuardService } from './role-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AuthComponent],
  providers: []
})
export class AuthModule {
}
