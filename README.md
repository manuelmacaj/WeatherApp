# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

This app allows you to discover the current weather.
I used [OpenWeather.com API](https://openweathermap.org/) to take information.
To test my app: https://manuelmacaj.github.io/WeatherApp/.

Digit the city and tap/click the search button. After 
tapping, you will see the weather card.
![Meteo](./media/Readme%20image/meteo.png)
What you will see on the weather card:
- City
- Date and hour of your request
- Current temperature
- Little description
- Max temperature
- Humidity
- Min temperature
- Wind speed

## Small considerations
- The input field is required
- The app will never request your current location
- You can also write the city on the url (example: https://manuelmacaj.github.io/WeatherApp/Milano/ will show the Milano's weather)
- If you write a wrong city, the web app will show a 404 error
- Only Celsius and Kilometer

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
