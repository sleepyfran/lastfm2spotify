import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-playlist-creator',
    templateUrl: './playlist-creator.component.html',
    styleUrls: ['./playlist-creator.component.scss']
})
export class PlaylistCreatorComponent implements OnInit {
    /**
     * The current selection from the list.
     */
    currentType = 'loved'

    constructor() { }

    ngOnInit() {

    }
}
