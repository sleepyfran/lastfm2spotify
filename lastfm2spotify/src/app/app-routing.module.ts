import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SpotifyLoginComponent } from './spotify-login/spotify-login.component'

const routes: Routes = [
  {
    path: 'spotify-login',
    component: SpotifyLoginComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
