import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature: any ='recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDkonRJZkjdtUpfhfD1S6MZCaxdfuBmU2c",
      authDomain: "ng-market-76840.firebaseapp.com"
    })
  }

  onNavigate(feature: string)
  {
    this.loadedFeature = feature;
  }
}
