import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-mon',
  templateUrl: './mon.component.html',
  styleUrls: ['./mon.component.scss']
})
export class MonComponent implements OnInit {
DropDownForm:FormGroup;
cities:any=[];
statesList=[
  {stateId:1,stateName:"Telangana",citiesList:[
    {cityId:1,cityName:"Hyderabad"},
    {cityId:2,cityName:"KarimNagar"},
    {cityId:3,cityName:"NarasaraoPet"},
    {cityId:4,cityName:"Waranghal"}]},
    {stateId:2,stateName:"Andhra Pradesh",citiesList:[
      {cityId:1,cityName:"Nellore"},
      {cityId:2,cityName:"Tirupati"},
      {cityId:3,cityName:"Guntur"},
      {cityId:4,cityName:"Vijayawada"}]},
]
  cityid: { cityId: number; cityName: string; }[];
  constructor( private mon:FormBuilder) {}
  ngOnInit() {
    this.DropDownForm=this.mon.group({
      state:[null,Validators.required],
      city:[null,Validators.required]
  })
}
onStateSelection(){
let index=this.statesList.findIndex(x=> x.stateId==this.DropDownForm.value.state);
if(index!=-1){
  this.cities=this.statesList[index].citiesList;
}
}
}

  



