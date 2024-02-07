import { Component, OnInit } from '@angular/core';
import { vitaeServices } from '../VitaeService';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-smart-home',
  templateUrl: './smart-home.component.html',
  styleUrls: ['./smart-home.component.css'],
})
export class SmartHomeComponent implements OnInit {
  constructor(private vitaeServices: vitaeServices) {}
  openDoor: boolean;
  openLight: boolean;
  dataSubscription: Subscription;

  ngOnInit(): void {
    this.vitaeServices.getData();

    this.dataSubscription = this.vitaeServices.dataChanged.subscribe(
      (data: any) => {
        switch (data.action) {
          case 0:
            this.openDoor = false;
            this.openLight = false;
            break;
          case 1:
            this.openDoor = true;
            break;
          case 2:
            this.openLight = true;
            break;
        }
      }
    );
  }

  changeDoorStatus() {
    this.openDoor = !this.openDoor;
    this.vitaeServices.sendData(this.openDoor ? 1 : 0);
  }

  changeLightStatus() {
    this.openLight = !this.openLight;
    this.vitaeServices.sendData(this.openLight ? 2 : 0);
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
    this.vitaeServices.stopDataUpdates();
  }
}
