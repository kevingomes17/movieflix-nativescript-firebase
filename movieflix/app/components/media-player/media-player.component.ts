import { Component, Input } from "@angular/core";
var youtubeParser = require('nativescript-youtube-parser');

import {registerElement} from "nativescript-angular/element-registry";
registerElement("VideoPlayer", () => require("nativescript-videoplayer").Video);

@Component({
    selector: 'media-player',
    templateUrl: './components/media-player/media-player.component.html'
})
export class MediaPlayerComponent {
    @Input()
    videoUrl: string;

    constructor() {
        // this.videoUrl = 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
        youtubeParser.getURL('https://www.youtube.com/watch?v=MrroTowsUMs', { quality: 'medium', container: 'mp4' })
            .then((urlList) => {
                this.videoUrl = urlList[0].url;
            });
    }
}