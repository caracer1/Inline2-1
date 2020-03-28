import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customertext: string;
  name: string;
  size: number;
  phone: number;
  time: number;
  myList = [];

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private modalService: ModalService
  ) {
    
}
ngOnInit() {
    this.customertext = 'John Smith';

  }
openModal(id: string) {
  this.modalService.open(id);
}

clear(){
  this.name = '';
  this.size = null;
  this.phone = null;

}

deleteParty(id_num,uid) {
  //this.name = this.myList[i].name;
  //this.size = this.myList[i].size;
  //this.phone = this.myList[i].phone;

  for (var i = 0; i <this.myList.length; i++){
    if (this.myList[i].time == id_num){
      this.myList.splice(i,1);
      this.authService.SetArrayDetails(uid,this.myList);

    }
  }
}

  editParty(id_num, id) {
 
  
    for (var i = 0; i <this.myList.length; i++){
      if (this.myList[i].time == id_num){
        this.name = this.myList[i].name;
        this.size = this.myList[i].size;
        this.phone = this.myList[i].phone;
       this.time = this.myList[i].time;
      }
    }
  this.modalService.open('custom-modal-3');
  }
  editPartySave(id_num,uid) {
 
  
    for (var i = 0; i <this.myList.length; i++){
      if (this.myList[i].time == id_num){
        //this.name = this.myList[i].name;
       // this.size = this.myList[i].size;
        //this.phone = this.myList[i].phone;
        this.myList[i].name = this.name;
        this.myList[i].size = this.size;
        this.myList[i].phone = this.phone;
      }
      this.authService.SetArrayDetails(uid,this.myList);

    }
  }



getInfo() {
  /*for (let i in this.myList){
    var party ={
    name : this.myList[i].name,
    size : this.myList[i].size,
    phone : this.myList[i].phone,

  };
}*/

  
  for (let i in this.myList){
    var currPerson = this.myList[this.myList.length-1];
   document.write(this.myList[currPerson]);
  }
  

}
onSave(uid){
  this.myList.push({name:this.name, size:this.size, phone:this.phone,time:Date.now(),})
  this.authService.SetArrayDetails(uid,this.myList);
  console.log(this.myList);
}
closeModal(id: string) {
    this.modalService.close(id);

}

removeItem(item,uid){
  
  this.myList.splice(item,1);
  this.authService.SetArrayDetails(uid,this.myList);

}









  editDetails() {
    this.ngZone.run(() => {
      this.router.navigate(['user-details']);
    }) 
  }
}
