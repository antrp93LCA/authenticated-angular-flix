import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token: any
  constructor(private apiService: ApiService) { }

 async signup(username,password){
   let response = this.apiService.post('auth/signup', {username, password});
   return await response;
  }
}
