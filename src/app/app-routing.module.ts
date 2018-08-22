import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';
import { AuthGuardService } from './shared/auth-guard.service';

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ],
  providers: [
    AuthGuardService,
  ]
})
export class AppRoutingModule { }
