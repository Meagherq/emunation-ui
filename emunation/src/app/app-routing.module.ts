import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MsalGuard } from '@azure/msal-angular';
import { EmulatorComponent } from './emulator/emulator.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'emulator', component: EmulatorComponent, canActivate: [MsalGuard] },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
