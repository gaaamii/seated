import { Component, OnInit, Input, trigger, state, style, transition, animate, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';

@Component({
    selector: 'chat-item',
    templateUrl: 'chat-item.component.html',
    styleUrls: ['./chat-item.component.scss'],
})
export class ChatItemComponent {
    @Input() item: any;

    constructor() {
    }

    ngOnInit() {
    }
}