import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serach-city',
  templateUrl: './serach-city.component.html',
  styleUrls: ['./serach-city.component.css']
})
export class SerachCityComponent implements OnInit {


  citySelected = new FormControl("", [Validators.required]);

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  getFieldError() {
    return "Campo obbligatorio, completalo!" || "";
  }

  searchCity() {
    this.router.navigate([this.citySelected.value]);
    this.citySelected.reset("");
  }
}
