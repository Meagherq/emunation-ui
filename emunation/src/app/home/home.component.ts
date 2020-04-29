import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';
import { SavesService } from 'src/services/saves.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    // Is a user logged in?
    get authenticated(): boolean {
        return this.authService.authenticated;
    }
    // The user
    get user(): User {
        return this.authService.user;
    }

    get weather(): any {
        return this.GetWeather();
    }

    constructor(public authService: AuthService, private savesService: SavesService) { }

    ngOnInit() {
    }

    async signIn(): Promise<void> {
        await this.authService.signIn();
        console.log(this.GetWeather());
    }

    async GetWeather() {
        (await this.savesService.getWeather()).subscribe(x => {
            console.log(x);
        });
    }
}
