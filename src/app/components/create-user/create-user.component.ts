import { Component, OnInit } from '@angular/core';
import { RequestUser, UserResponse } from 'src/app/model/UserInterface';
import { ProviderService } from 'src/app/service/provider.service';
import { Response } from 'src/app/model/ResponseInterface';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  Id:number= 0;
  rp:Response = {message: '', status:''}
  dataRequest:RequestUser = {
    Id: 0,
    UserName: '',
    FirstName: '',
    LastName: '',
    Password: '',
    EmailAddress: '',
    Address: '',
    BirdDate: ''
  }
  dataResponse:UserResponse = {
    id: 0,
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    emailAddress: '',
    address: '',
    birdDate:'',
    message: '',
    status: ''
  }

  constructor(private prooviderService:ProviderService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.rutaActiva.snapshot.params['id'];
    console.log(this.Id);

    if(this.Id > 0)
      this.getUser(this.Id);
  }
  
  getUser(id:number):void{
    this.prooviderService.getUser(id).subscribe(item => {
      this.dataResponse = item
      this.dataResponse.birdDate = this.convertDateTimeToDate(item.birdDate);
    })
  }

  convertDateTimeToDate(birdDate:string): string {
    return new Date(birdDate).toISOString().slice(0, 10);
  }
  
  save():void{
    let rq:RequestUser = this.convertResponseToResquest();
    
    if(this.dataResponse.id === 0){
       
      this.prooviderService.saveUser(rq).subscribe(item=> {
        if(item.status === "Ok")
          alert("Data is save");
        else
          alert("Data is not save");

      })
    } else {
      this.prooviderService.updateUser(rq).subscribe(item =>{
        if(item.status === "Ok")
          alert("Data is Update");
        else
          alert("Data is not Update");

      })
    }
  }

  convertResponseToResquest():RequestUser{
    this.dataRequest.Id = this.dataResponse.id;
       this.dataRequest.UserName = this.dataResponse.userName;
       this.dataRequest.FirstName = this.dataResponse.firstName;
       this.dataRequest.LastName = this.dataResponse.lastName;
       this.dataRequest.Password = this.dataResponse.password;
       this.dataRequest.EmailAddress = this.dataResponse.emailAddress;
       this.dataRequest.Address = this.dataResponse.address;
       this.dataRequest.BirdDate = this.dataResponse.birdDate;
       return this.dataRequest;
  }
}
