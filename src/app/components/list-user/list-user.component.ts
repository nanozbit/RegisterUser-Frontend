import { Component, OnInit } from '@angular/core';
import { ListUserEntity, UserEntity, UserResponse } from 'src/app/model/UserInterface';
import { ProviderService } from 'src/app/service/provider.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private provideServide:ProviderService) { }
  listUser:UserResponse[]=[];
  
  ngOnInit(): void {
    this.getListUser();
  }

  getListUser():void{
    this.provideServide.getListUser().subscribe(item =>{
      if(item.status ==="Ok")
        this.listUser = item.listUser;
    })
  }
  
  updateUser(id:number): void{
    
  }
  deleteUser(id:number):void{
    this.provideServide.deleteUser(id).subscribe(item => {
      if(item.status === "Ok"){
        alert("Delete User")
        this.getListUser();
      }
      else
        alert("User Is Not Delete")
    })
  }

}
