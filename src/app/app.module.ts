import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { secrets } from '../../secrets';
import { ChatContainer } from './containers/chat.container';
import { ChatItemComponent } from './components/chat-item.component';
import { LinkerPipe } from './pipes/linker.pipe';

export const firebaseConfig = {
  apiKey: environment.FIREBASE_API_KEY,
  authDomain: environment.FIREBASE_AUTH_DOMAIN,
  databaseURL: environment.FIREBASE_DATABASE_URL,
  projectId: environment.FIREBASE_PROJECT_ID,
  storageBucket: environment.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: environment.FIREBASE_MESSAGING_SENDERID,
};

@NgModule({
  declarations: [
    AppComponent,
    ChatContainer,
    ChatItemComponent,
    LinkerPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
