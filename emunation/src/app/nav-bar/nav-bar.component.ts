import { Component, OnInit } from '@angular/core';

import { User } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    showNav: boolean;

    get authenticated(): boolean {
        return this.authService.authenticated;
    }

    // The user
    get user(): User {
        return this.authService.user;
    }

    constructor(private authService: AuthService) { }


    ngOnInit() {
        this.showNav = false;
    }

    toggleNavBar(): void {
        this.showNav = !this.showNav;
    }

    async signIn(): Promise<void> {
        await this.authService.signIn();
    }

    signOut(): void {
        this.authService.signOut();
    }
}
