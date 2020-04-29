import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SavesService {

    constructor(private http: HttpClient) {

    }

    async getWeather() {
        return this.http.get('https://localhost:5000/WeatherForecast');
    }

}
