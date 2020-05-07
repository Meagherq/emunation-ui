import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';
import { SavesService } from 'src/services/saves.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
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

    get games(): any {
        return this.GetGames();
    }

    constructor(public authService: AuthService, private savesService: SavesService) { }

    ngOnInit() {
    }

    async signIn(): Promise<void> {
        await this.authService.signIn();
        console.log(this.GetGames());
    }

    async GetGames() {
        (await this.savesService.getGames()).subscribe(x => {
            console.log(x);
        });
    }

    async GetGame(name) {
        (await this.savesService.getGame(name)).subscribe(x => {
            console.log(x);
        });
    }
}
