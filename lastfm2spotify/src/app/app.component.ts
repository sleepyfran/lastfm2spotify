import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private router: Router,
        private localStorageService: LocalStorageService,
    ) { }

    ngOnInit() {
        // Check if we already a Spotify token.
        const spotifyToken = this.localStorageService.getToken()

        if (spotifyToken) {
            // Redirect to the main component.
        } else {
            // Check if the current URL is the spotify-login, if not, redirect there.
            // Since the router's URL is async, delay the excution for a few milisecs.
            setTimeout(() => {
                if (!this.router.url.includes('/spotify-login')) {
                    this.router.navigateByUrl('/spotify-login')
                }
            })
        }
    }
}
