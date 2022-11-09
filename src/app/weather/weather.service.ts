import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { RootObject } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getData(city: string): Observable<RootObject> { // GET method che richiede il meteo attuale di una città
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8c82c012915dc5a1136742edea6dc781&lang=it`;
    return this.http.get<RootObject>(path).pipe(
      catchError(this.handleError),
      map(data => ({ // da approfondire
        ...data, // https://stackoverflow.com/questions/46235436/angular-whats-the-meaning-of-these-three-dots-in-ngrx
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      })
      )
    );
  }

  // modo alternativo se non vogliamo creare un interfaccia ad hoc
  
  // getData(city: string): Observable<any> {
  //   const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8c82c012915dc5a1136742edea6dc781&lang=it`;
  //   return this.http.get<any>(path).pipe(
  //     catchError(this.handleError),
  //     map(data => ({ // da approfondire
  //       ...data, // https://stackoverflow.com/questions/46235436/angular-whats-the-meaning-of-these-three-dots-in-ngrx
  //       image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  //     })
  //     )
  //   );
  // }

  private handleError(error: HttpErrorResponse) { // in caso di errori
    if (error.status === 0) { // errore lato client
      alert("Assicurarsi di essere connessi ad Internet e riprova");
    } else {
      switch (error.status) {
        case 404: // errore 404, la città non esiste
          alert("La città digitata non esiste, riprova");
          break;
      }
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.message));
  }
}
