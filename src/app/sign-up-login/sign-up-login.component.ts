import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-sign-up-login",
  templateUrl: "./sign-up-login.component.html",
  styleUrls: ["./sign-up-login.component.css"],
})
export class SignUpLoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  async login() {
    await this.authService.login(this.username, this.password);
  }

  async signup() {
    await this.authService.signup(this.username, this.password);
  }
}
