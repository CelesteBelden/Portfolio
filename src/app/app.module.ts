import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyBF4AJ93ID_jaTTgvuHjsVyG3E2l8Yp3eA",
  authDomain: "portfolio-9c227.firebaseapp.com",
  projectId: "portfolio-9c227",
  storageBucket: "portfolio-9c227.appspot.com",
  messagingSenderId: "607095094905",
  appId: "1:607095094905:web:d892082015290920301ea8",
  measurementId: "G-J23DGFJP9Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
