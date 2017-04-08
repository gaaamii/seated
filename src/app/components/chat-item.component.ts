import { Component, OnInit, Input, trigger, state, style, transition, animate, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';

@Component({
    selector: 'chat-item',
    templateUrl: 'chat-item.component.html',
    styleUrls: ['./chat-item.component.scss'],
    // I don't understand Angular animation
    // animations: [
    //     trigger('chatItemState', [
    //         state('active', style({
    //             backgroundColor: '#fafafa',
    //         })),
    //         state('inactive', style({
    //             backgroundColor: '#fff',
    //         })),
    //         transition('inactive => active', animate('100ms ease-in')),
    //         transition('active => inactive', animate('100ms ease-out'))
    //     ])
    // ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatItemComponent {
    @Input() item: any;

    constructor() { }
}