import { Component, OnInit } from '@angular/core';
import { UserEntity } from 'src/app/model/UserInterface';
import { ProviderService } from 'src/app/service/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: UserEntity = {
    UserName: '',
    Password: ''
  };

  constructor(private providerService: ProviderService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.providerService.login(this.data).subscribe(item => {
      if (item.status === "Ok")
        this.router.navigate(['/list-user']);
    })
  }

}
