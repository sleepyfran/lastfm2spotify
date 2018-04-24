import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-playlist-creator',
    templateUrl: './playlist-creator.component.html',
    styleUrls: ['./playlist-creator.component.scss']
})
export class PlaylistCreatorComponent implements OnInit {
    /**
     * Username of the user inputted in the text input.
     */
    lastfmUsername = ''

    /**
     * Name of the playlist in which the user wants to import the songs, inputted in the text input.
     */
    spotifyPlaylistName = ''

    /**
     * The current selection from the list.
     */
    currentType = 'loved'

    constructor() { }

    ngOnInit() {

    }

    /**
     * Called by the "Import it!" button. Takes the input from both of the text inputs, checks
     * what import option was selected and starts the process.
     */
    importIntoPlaylist() {

    }
}
