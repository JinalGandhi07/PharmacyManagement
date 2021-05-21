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
import { DonatedisplayComponent } from './donatedisplay/donatedisplay.component';
import { NeeddisplayComponent } from './needdisplay/needdisplay.component';
import { ChoiceComponent } from './choice/choice.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { HospitalformComponent } from './hospitalform/hospitalform.component';
import { DistriformComponent } from './distriform/distriform.component';
import { VaccinedisplayComponent } from './vaccinedisplay/vaccinedisplay.component';
import { MedicinedisplayComponent } from './medicinedisplay/medicinedisplay.component';


const routes: Routes = [
  {
    path:'', redirectTo:'home',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {path:'register',component:RegisterComponent},
  {path:'hospitals',component:HospitalformComponent},
  {path:'distributors',component:DistriformComponent},
  {path:'homescreen',component:HomescreenComponent},
  {path:'choice',component:ChoiceComponent},
  {path:'home',component:CardComponent,canActivate:[AuthguardService]},
  {path:'medicine/:a',component:MedicineComponent,canActivate:[AuthguardService]},
  {path:'bed',component:BedsComponent,canActivate:[AuthguardService]},
  {path:'plasmaoption',component:PlasmaoptionComponent,canActivate:[AuthguardService]},
  {path:'symptoms',component:CovidsymptomsComponent,canActivate:[AuthguardService]},
  {path:'cure',component:CureComponent,canActivate:[AuthguardService]},
  {path:'contact',component:ContactComponent,canActivate:[AuthguardService]},
  {path:'display/:id',component:DisplayComponent,canActivate:[AuthguardService]},
  {path:'donatedisplay/:id',component:DonatedisplayComponent,canActivate:[AuthguardService]},
  {path:'needdisplay/:id',component:NeeddisplayComponent,canActivate:[AuthguardService]},
  {path:'guide',component:CovidguideComponent,canActivate:[AuthguardService]},
  {path:'medicinecard',component:MedicinecardComponent,canActivate:[AuthguardService]},
  {path:'vaccine',component:VaccineComponent,canActivate:[AuthguardService]},
  {path:'vaccinelist/:id',component:VaccinelistComponent,canActivate:[AuthguardService]},
  {path:'plasmalist',component:PlasmalistComponent,canActivate:[AuthguardService]},
  {path:'donorlist',component:DonorlistComponent,canActivate:[AuthguardService]},
  {path:'ab',component:EligibilityComponent,canActivate:[AuthguardService]},
  {path:'vaccinedisplay/:id',component:VaccinedisplayComponent,canActivate:[AuthguardService]},
  {path:'medicinedisplay/:id',component:MedicinedisplayComponent,canActivate:[AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
