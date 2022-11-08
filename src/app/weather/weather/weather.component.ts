import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap, filter, map, Observable } from 'rxjs';
import { RootObject } from 'src/app/interfaces/interface';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: String = "";
  datiRicevuti: Observable<any> | undefined;
  
  constructor(private router: ActivatedRoute, private weatherService: WeatherService, 
    private route: Router) {
  }

  ngOnInit(): void {
    this.datiRicevuti = this.router.params.pipe(
      map(params => params["locationSelected"]),
      filter(name => !!name),
      concatMap(name => this.weatherService.getData(name))
    )
    this.datiRicevuti.subscribe({
      error: _ => this.route.navigate(["/"])
    })
  }
  
}
