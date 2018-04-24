import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() { }

    /**
     * Returns the Spotify access token from the local storage.
     */
    getToken() {
        return localStorage.getItem('spotify_token')
    }

    /**
     * Saves the Spotify access token returned after the user logs in.
     *
     * @param token Token returned by the Spotify API.
     */
    saveToken(token) {
        localStorage.setItem('spotify_token', token)
    }
}
