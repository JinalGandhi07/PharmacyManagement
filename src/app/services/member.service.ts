import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  result=[];
  vaccinationcenters=[];
  donateplasma=[];
  needplasma=[];
  alldistributors=[];
  medicinedistributors=[];
  doing=[];
  constructor(public db:AngularFirestore, public router:Router, ) { }

  getbedhospitals(){
    //console.log(this.auth.loggedinuserid)
    this.db.collection("BedHospitals")
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(res=>{
      //console.log(res)
      this.result=res
      console.log(this.result)
    })
  }
  getdonateplasma(){
    //console.log(this.auth.loggedinuserid)
    this.db.collection("DonatePlasmaHospitals")
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(res=>{
      //console.log(res)
      this.donateplasma=res
      console.log(this.donateplasma)
    })
  }
  addHospital(member)
  {
    let tempStudent:{Name:string,City:string,Address:string,NumberOfEstimatedBedsCovid:number,Email:string,Contact:number,ContactTwo:number}=member
    
     tempStudent.Name=member.Name
    tempStudent.City=member.City
    tempStudent.Address=member.Address
    tempStudent.NumberOfEstimatedBedsCovid=member.NumberOfEstimatedBedsCovid
    tempStudent.Email=member.Email
    tempStudent.Contact=member.Contact
    tempStudent.ContactTwo=member.ContactTwo
    this.db.collection("BedHospitals").add(tempStudent) 
    // alert("Hospital Successfully Added.")
  }

  addDistributor(member,medicines)
  {
    let tempStudent:{Name:string,City:string,Address:string,MinStock:number,Email:string,Contact:number,ContactTwo:number,Medicines}=member
    tempStudent.Name=member.Name
    tempStudent.City=member.City
    tempStudent.Address=member.Address
    tempStudent.MinStock=member.MinStock
    tempStudent.Email=member.Email
    tempStudent.Contact=member.Contact
    tempStudent.ContactTwo=member.ContactTwo
    tempStudent.Medicines=medicines;

    this.db.collection("Distributors").add(tempStudent) 
    // alert("Distributor Successfully Added.")
  }



  getvaccinecenter(b){
    // console.log(this.auth.loggedinuserid)
    this.db.collection("VaccinationCenters",ref=>ref.where('City','==',b))
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(res=>{
      console.log(res)
      this.vaccinationcenters=res
    })
  }

  getdistributors(b){
    // console.log(this.auth.loggedinuserid)
    this.db.collection("Distributors",ref=>ref.where('Medicines','array-contains',b))
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(res=>{
      console.log(res)
      this.alldistributors=res
    })
  }



  getneedplasma(){
    //console.log(this.auth.loggedinuserid)
    this.db.collection("NeedPlasmaHospitals")
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(res=>{
      //console.log(res)
      this.needplasma=res
      console.log(this.needplasma)
    })
  }
  getamountbyId(id){
    return this.db.collection("BedHospitals").doc(id).valueChanges()
  }
  getdonateplasmabyId(id){
    return this.db.collection("DonatePlasmaHospitals").doc(id).valueChanges()
  }
  getneedplasmabyId(id){
    return this.db.collection("NeedPlasmaHospitals").doc(id).valueChanges()
  }

  getvaccinebyId(id){
    return this.db.collection("VaccinationCenters").doc(id).valueChanges()
  }

  getdistributorbyId(id){
    return this.db.collection("Distributors").doc(id).valueChanges()
  }
  
}
