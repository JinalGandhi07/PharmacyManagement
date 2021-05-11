import { AuthguardService } from './services/authguard.service';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { DonorlistComponent } from './donorlist/donorlist.component';
import { PlasmalistComponent } from './plasmalist/plasmalist.component';
import { VaccinelistComponent } from './vaccinelist/vaccinelist.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { MedicinecardComponent } from './medicinecard/medicinecard.component';
import { CovidguideComponent } from './covidguide/covidguide.component';
import { DisplayComponent } from './display/display.component';
import { ContactComponent } from './contact/contact.component';
import { CureComponent } from './cure/cure.component';
import { CovidsymptomsComponent } from './covidsymptoms/covidsymptoms.component';
import { PlasmaoptionComponent } from './plasmaoption/plasmaoption.component';
import { BedsComponent } from './beds/beds.component';
import { MedicineComponent } from './medicine/medicine.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path:'', redirectTo:'home',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {path:'register',component:RegisterComponent},

  {path:'home',component:CardComponent,canActivate:[AuthguardService]},
  {path:'medicine',component:MedicineComponent,canActivate:[AuthguardService]},
  {path:'bed',component:BedsComponent,canActivate:[AuthguardService]},
  {path:'plasmaoption',component:PlasmaoptionComponent,canActivate:[AuthguardService]},
  {path:'symptoms',component:CovidsymptomsComponent,canActivate:[AuthguardService]},
  {path:'cure',component:CureComponent,canActivate:[AuthguardService]},
  {path:'contact',component:ContactComponent,canActivate:[AuthguardService]},
  {path:'display',component:DisplayComponent,canActivate:[AuthguardService]},
  {path:'guide',component:CovidguideComponent,canActivate:[AuthguardService]},
  {path:'medicinecard',component:MedicinecardComponent,canActivate:[AuthguardService]},
  {path:'vaccine',component:VaccineComponent,canActivate:[AuthguardService]},
  {path:'vaccinelist',component:VaccinelistComponent,canActivate:[AuthguardService]},
  {path:'plasmalist',component:PlasmalistComponent,canActivate:[AuthguardService]},
  {path:'donorlist',component:DonorlistComponent,canActivate:[AuthguardService]},
  {path:'ab',component:EligibilityComponent,canActivate:[AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
