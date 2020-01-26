import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-clock',
    template: '<div>{{ clock | date:"yyyy-MM-dd HH:mm:ss" }}</div>'
})

export class ClockComponent implements OnInit {
    @Input() clock:Date;
    constructor() { }

    ngOnInit() { }
}