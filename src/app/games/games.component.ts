import { Component, OnInit } from '@angular/core';
import { vitaeServices } from '../VitaeService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  constructor(private vitaeServices: vitaeServices) {}
  allData : any= {};
  dataSubscription: Subscription;
  ngOnInit(): void {
    this.vitaeServices.getData();

    this.dataSubscription = this.vitaeServices.dataChanged.subscribe(
      (data: any) => {
        // data.action = data.action === "0" ? "UP":"Down"
        // data.action = data.action == 1 || data.action == 2 ? 'UP' : 'Down';
        // data.action = data.action = 0 ? 'Down' : 'UP';
        this.allData = data;
      }
    );
  }
  trackByFn(index: number, item: any): string {
    return item.time;
  }
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
    this.vitaeServices.stopDataUpdates();
  }
}
