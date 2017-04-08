import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'chat-container',
    templateUrl: 'chat.container.html',
    styleUrls: ['./chat.container.scss']
})

export class ChatContainer implements OnInit {
    @Input() items: FirebaseListObservable<any>;

    @ViewChild('elementRef') private elementRef: ElementRef;

    itemsLoaded: boolean;

    constructor() { }

    ngOnInit() { 
        this.items.subscribe(() => {
            this.itemsLoaded = true;
        });
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    private scrollToBottom() {
        this.elementRef.nativeElement.scrollTop = this.elementRef.nativeElement.scrollHeight;
    }
}
