export interface Coord { // interfaccia coordinate
    lon: number; 
    lat: number; 
}

export interface Weather {
    id: number;
    main: string;
    description: string; 
    icon: string; 
}

export interface Main { // interfaccia main
    temp: number; 
    feels_like: number; 
    temp_min: number; 
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

export interface Wind { // interfaccia vento
    speed: number;
    deg: number;
    gust: number;
}

export interface Rain { // interfaccia pioggia
    h: number;
}

export interface Clouds { // interfaccia nuvole
    all: number;
}

export interface Sys { // interfaccia sistema
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface RootObject { // interfaccia che racchiude tutte le interfacce
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    rain: Rain;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

