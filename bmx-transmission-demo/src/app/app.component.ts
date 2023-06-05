import { Component, OnInit } from '@angular/core';
import { BmxTransmissionService } from 'bmx-transmission/public-api';

@Component({
    selector: 'bmx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    title = 'bmx-transmission-demo';

    constructor(
        private transmission: BmxTransmissionService
    ) {}

    ngOnInit(): void {
    }


}
