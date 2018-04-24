import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SpotifyLoginComponent } from './spotify-login/spotify-login.component'
import { PlaylistCreatorComponent } from './playlist-creator/playlist-creator.component';

const routes: Routes = [
    {
        path: 'spotify-login',
        component: SpotifyLoginComponent,
    },
    {
        path: 'playlist-creator',
        component: PlaylistCreatorComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
