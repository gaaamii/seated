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

    constructor(private angularFire: AngularFire, private elementRef: ElementRef) {
        this.items = angularFire.database.list('/items', {
            query: {
                limitToLast: 50,
            }
        });

        this.angularFire.auth.subscribe(auth => {
            if (auth && auth.twitter) {
                this.user = {
                    name: auth.twitter.displayName,
                    imageURL: auth.twitter.photoURL,
                    provider: 'twitter'
                };
            }
            if (this.user) {
              this.send(`${this.user.name} seated.`);
            }
        });
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

    this.message = '';
    this.items.push(params);
    // .then(() => { do something });
  }

  signOut() {
    this.angularFire.auth.logout().then(() => {
      alert('Signed out.');
      this.send(`${this.user.name} Signed out.`);
      this.user = undefined;
    });
  }
}
