import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap, delay, filter, map, Observable, tap } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: String = "";
  datiRicevuti: Observable<any> | undefined;
  isLoading = false;

  constructor(private router: ActivatedRoute, private weatherService: WeatherService,
    private route: Router) {
  }

  ngOnInit(): void {
    this.datiRicevuti = this.router.params.pipe(
      map(params => params["locationSelected"]),
      filter(name => !!name),
      tap(() => this.isLoading = true),
      concatMap(name => this.weatherService.getData(name)),
      delay(1000),
      tap(() => this.isLoading = false)
    )
    this.datiRicevuti.subscribe({
      error: _ => this.route.navigate(["/"])
    })
  }

}
