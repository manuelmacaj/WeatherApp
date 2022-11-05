import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap, filter, map, Observable, Subscription } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  data!: Subscription;
  city: String = "";
  datiRicevuti: Observable<any> | undefined;
  
  constructor(private router: ActivatedRoute, private weatherService: WeatherService) {
  }

  ngOnInit(): void {
  }

  getForcast() {
    let citySelected = this.router.snapshot.paramMap.get("locationSelected")
    // if (citySelected) {
    //   this.data = this.weatherService.getData(citySelected).subscribe({
    //     next: data => {
    //       console.log(data);
    //       this.datiRicevuti = data;
    //     },
    //     error: err => console.error(err)
    //   })
    // }
    this.datiRicevuti = this.router.params.pipe(
      map(params => params["locationSelected"]),
      filter(name => !!name),
      concatMap(name => this.weatherService.getData(name))
    )
  }

}
