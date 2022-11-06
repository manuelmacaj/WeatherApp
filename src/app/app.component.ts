import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  cities = ["Milan", "London", "Rome", "Madrid"];
  citySelected = new FormControl("");

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  protected searchCity() {
    console.log("Bottone cliccato");
    this.router.navigate([this.citySelected.value])
  }
}
