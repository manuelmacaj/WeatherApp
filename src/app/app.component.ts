import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  cities = ["Milan", "London", "Rome", "Madrid"];
  citySelected = new FormControl("", [Validators.required]);

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  getFieldError() {
    return "Il campo è obbligatorio, completalo!" || ""
  }

  protected searchCity() {
    console.log("Bottone cliccato");
    this.router.navigate([this.citySelected.value])
    this.citySelected.reset("");
  }
}
