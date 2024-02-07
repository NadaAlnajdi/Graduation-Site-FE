import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-button',
  templateUrl: './scroll-to-top-button.component.html',
  styleUrls: ['./scroll-to-top-button.component.css']
})
export class ScrollToTopButtonComponent implements OnInit {
  showButton: boolean = false;

  ngOnInit() {
    this.onWindowScroll(); // Call the method to initially check the scroll position
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.showButton = scrollPosition > 300; // Show the button when scrolled 300px or more
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
  }
}
