import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { vitaeServices } from '../VitaeService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit, OnDestroy {
  constructor(private vitaeService: vitaeServices) { }
  forward: boolean = false;
  right: boolean = false;
  back: boolean = false;
  left: boolean = false;
  rotate: boolean = false;
  allData: any = {};
  dataSubscription: Subscription;
  intervalId: any;
  activeIndex: number = 0;

  ngOnInit(): void {
    this.vitaeService.getData();

    this.dataSubscription = this.vitaeService.dataChanged.subscribe(
      (data: any) => {
        this.allData = data;
        // console.log(this.allData.action);
        this.addClass(data.action);
      }
    );
  }

  addClass(data) {
    switch (data) {
      case 1:
        this.forward = true;

        setTimeout(() => {
          this.forward = false;
        }, 1000);
        break;
      case 3:
        this.right = true;

        setTimeout(() => {
          this.right = false;
        }, 1000);
        break;
      case 4:
        this.left = true;

        setTimeout(() => {
          this.left = false;
        }, 1000);
        break;
      case 5:
        this.back = true;

        setTimeout(() => {
          this.back = false;
        }, 1000);
        break;
      case 2:
        this.rotate = true;

        setTimeout(() => {
          this.rotate = false;
        }, 1000);
        break;
    }
  }

  updateData(n: any) {
    switch (n) {
      case 1:
        this.forward = true;

        setTimeout(() => {
          this.forward = false;
        }, 1000);
        break;
      case 2:
        this.rotate = true;

        setTimeout(() => {
          this.rotate = false;
        }, 1000);
        break;
      case 3:
        this.right = true;

        setTimeout(() => {
          this.right = false;
        }, 1000);
        break;
      case 4:
        this.left = true;

        setTimeout(() => {
          this.left = false;
        }, 1000);
        break;
      case 5:
        this.back = true;

        setTimeout(() => {
          this.back = false;
        }, 1000);
        break;


    }
    this.vitaeService.sendData(n);
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
    this.vitaeService.stopDataUpdates();
  }
}
