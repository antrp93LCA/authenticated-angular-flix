import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  token: string;
  constructor(private apiService: ApiService) {}

  async signup(username, password) {
    let response = this.apiService.post("auth/signup", { username, password });
    return await response;
  }

  async login() {
    let loginData = {
      username: "Test User",
      password: "password",
    };

    await this.apiService.post("auth/signup", loginData);

    const response = await this.apiService.post("auth/login", loginData);

    this.token = response.token;
  }

  getToken(){
    return this.token;
  }
}
