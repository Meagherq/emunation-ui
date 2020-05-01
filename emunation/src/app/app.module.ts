import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { MsalModule, MsalInterceptor, MsalService } from '@azure/msal-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AlertsComponent } from './alerts/alerts.component';
import { OAuthSettings } from 'src/models/oauth';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SavesService } from 'src/services/saves.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

export const protectedResourceMap: [string, string[]][] =
    [
        [
            'https://localhost:5000/WeatherForecast',
            [
                'api://4023cf15-74fa-4f7c-ad53-fe8899902c73/api-access',
            ]
        ],
        [
            'https://graph.microsoft.com/v1.0/me',
            [
                'user.read'
            ]
        ]
    ];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        AlertsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        MatSidenavModule,
        MatToolbarModule,
        HttpClientModule,
        FontAwesomeModule,
        MsalModule.forRoot({
            auth: {
                clientId: '1221204e-cd94-42a7-aca6-01e6f6147802',
                validateAuthority: true,
                authority: 'https://login.microsoftonline.com/90e77988-b471-4f16-896e-4b3b2b55fcf5',
            }
        },
            {
                consentScopes: [ 'user.read', 'api://4023cf15-74fa-4f7c-ad53-fe8899902c73/api-access' ],
                protectedResourceMap
            }),
        BrowserAnimationsModule,
    ],
    providers:
    [
        SavesService,
        MsalService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MsalInterceptor,
            multi: true
        }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faExternalLinkAlt, faUserCircle);
    }
}
