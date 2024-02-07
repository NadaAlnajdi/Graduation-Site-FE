import { Component, OnInit } from '@angular/core';
import { vitaeServices } from '../VitaeService';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  errMsg: string = '';

  constructor( private vitaeServices: vitaeServices) {}

  ngOnInit(): void {
    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
      contactButton.addEventListener('click', this.handleContactButtonClick);
    }

    const closeButton = document.getElementById('close-button');
    if (closeButton) {
      closeButton.addEventListener('click', this.handleCloseButtonClick);
    }
  }

  handleContactButtonClick() {
    window.location.href = 'mailto:vitaeteam11@gmail.com';
  }

  handleCloseButtonClick() {
    const messageContainer = document.getElementById('contact-message');
    if (messageContainer) {
      messageContainer.style.display = 'none';
    }
  }
}
