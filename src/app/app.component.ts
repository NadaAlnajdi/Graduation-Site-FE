import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { AppLoadingService } from './core/app-loading.service';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewChecked {
  title = 'VITAE';

  constructor(
    public appLoadingService: AppLoadingService,
    private cdr: ChangeDetectorRef,
  ) {}
    ngOnInit() {
      AOS.init();
    }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }
}
