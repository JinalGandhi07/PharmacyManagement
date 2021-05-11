import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './card/card.component';
import { MedicineComponent } from './medicine/medicine.component';
import { BedsComponent } from './beds/beds.component';
import { PlasmaoptionComponent } from './plasmaoption/plasmaoption.component';
import { CovidsymptomsComponent } from './covidsymptoms/covidsymptoms.component';
import { CureComponent } from './cure/cure.component';
import { ContactComponent } from './contact/contact.component';
import { DisplayComponent } from './display/display.component';
import { CovidguideComponent } from './covidguide/covidguide.component';
import { MedicinecardComponent } from './medicinecard/medicinecard.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { VaccinelistComponent } from './vaccinelist/vaccinelist.component';
import { PlasmalistComponent } from './plasmalist/plasmalist.component';
import { DonorlistComponent } from './donorlist/donorlist.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CardComponent,
    MedicineComponent,
    BedsComponent,
    PlasmaoptionComponent,
    CovidsymptomsComponent,
    CureComponent,
    ContactComponent,
    DisplayComponent,
    CovidguideComponent,
    MedicinecardComponent,
    VaccineComponent,
    VaccinelistComponent,
    PlasmalistComponent,
    DonorlistComponent,
    EligibilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule, 
    AngularFireDatabaseModule, 
    AngularFireModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
