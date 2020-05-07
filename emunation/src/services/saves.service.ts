import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as config from './app-config.json';

@Injectable({
    providedIn: 'root'
})
export class SavesService {

    url = config.resources.gameApi.resourceUri;

    constructor(private http: HttpClient) {

    }


    async getGames() {
        return this.http.get(this.url);
    }

    async getGame(name) {
        return this.http.get(this.url + name);
    }

    async postGame(game) {
        console.log(game);
        return this.http.post(this.url, game);
        
    }
}
