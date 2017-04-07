import { Component, ViewChild, ElementRef } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
import * as strftime from 'strftime';

interface IUser {
  name: string;
  imageURL: string;
  provider: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  message: string = '';
  user: IUser;

  @ViewChild('chatContainer') private chatContainer: ElementRef;

  constructor(private angularFire: AngularFire) {
    this.items = angularFire.database.list('/messages', {
      query: {
        limitToLast: 50,
        orderByKey: true,
      }
    });

    this.angularFire.auth.subscribe(auth => {
      if (auth && auth.twitter) {
        this.user = {
          name: auth.twitter.displayName,
          imageURL: auth.twitter.photoURL,
          provider: 'twitter',
        };
      }

      if (this.user) {
        this.send(`${this.user.name} seated.`);
        this.scrollToBottom();
      }
    })
  }

  ngOnAfterViewInit() {
    this.scrollToBottom();
  }

  loginWithTwitter() {
    this.angularFire.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
    });
  }

  send(desc: string) {
    if (desc.length <= 0) return;
    const params = {
      message: desc,
      createdAt: strftime('%Y-%m-%d %H:%M:%S'),
      user: this.user
    };

    this.items.push(params).then(() => {
      this.scrollToBottom();
      this.message = '';
    });
  }

  scrollToBottom() {
    this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
  }

  signOut() {
    this.angularFire.auth.logout().then(() => {
      alert('Signed out.');
      this.send(`${this.user.name} Signed out.`);
      this.user = undefined;
    });
  }
}
