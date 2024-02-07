import { Component, OnInit } from '@angular/core';
import { vitaeServices } from '../VitaeService';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutUsComponent implements OnInit {
  errMsg: string = '';

  constructor(private vitaeServices: vitaeServices) { }

  ngOnInit(): void {
  }
}
