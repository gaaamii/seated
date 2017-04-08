import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'chat-container',
    templateUrl: 'chat.container.html',
    styleUrls: ['./chat.container.scss']
})

export class ChatContainer implements OnInit {
    @Input() items: any[];

    @ViewChild('elementRef') private elementRef: ElementRef;

    constructor() { }

    ngOnInit() { }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    private scrollToBottom() {
        this.elementRef.nativeElement.scrollTop = this.elementRef.nativeElement.scrollHeight;
    }
}
