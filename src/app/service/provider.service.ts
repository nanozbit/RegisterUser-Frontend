import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListUserEntity, RequestUser, UserEntity, UserResponse } from '../model/UserInterface';
import { Response } from '../model/ResponseInterface';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private urlApi = "https://localhost:5001/api/user/";
  constructor(private http:HttpClient) { }

  login(request:UserEntity):Observable<Response>{
    return this.http.post<Response>(`${this.urlApi}login/`, request);
  }

  getListUser():Observable<ListUserEntity>{
    return this.http.get<ListUserEntity>(this.urlApi);
  }

  getUser(id:number):Observable<UserResponse>{
      return this.http.get<UserResponse>(`${this.urlApi}${id}`);
  }

  saveUser(rq:RequestUser):Observable<Response>{
    return this.http.post<Response>(this.urlApi, rq);
  }

  updateUser(rq:RequestUser):Observable<Response>{
    return this.http.put<Response>(this.urlApi, rq);
  }
  deleteUser(id:number):Observable<Response>{
    return this.http.delete<Response>(`${this.urlApi}${id}`);
  }
}
