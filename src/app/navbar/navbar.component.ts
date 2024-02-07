import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean;
  isOwner: boolean;
  errMsg: string = '';
  isAdmin: boolean;
  user: any = {};
  isNavbarHidden: boolean = false;
  prevScrollPos: number = window.scrollY || document.documentElement.scrollTop;
  ownerList = [23434, 61255, 42634, 54356, 76235];

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.auth();
  }

  handleLogout() {
    const token = localStorage.getItem('token');
    this.AuthService.logout().subscribe(
      (res: any) => {
        if (res.message === "Sign Out 'Done' ") {
          localStorage.removeItem('token');
          this.toastr.success('logged out');
          this.router.navigate(['login']);
          setTimeout(function () {
            window.location.reload();
          }, 1000);
        } else {
          this.errMsg = res?.message;
        }
      },
      (e) => {
        console.log(e);
        this.toastr.error('logging out failed');
      }
    );
  }

  auth() {
    this.AuthService.userInfo.subscribe((res) => {
      if (res) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
    this.AuthService.isOwner.subscribe((data) => {
      this.isOwner = data;
    });
    this.user = JSON.parse(localStorage.getItem('user'));
    // console.log(this.user);
    if (this.ownerList.includes(this.user.ownerId)) {
      this.isOwner = true;
    } else {
      this.isOwner = false;
    }
    if (this.user.userLevel === 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
    // console.log(this.isOwner);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos =
      window.scrollY || document.documentElement.scrollTop;

    if (this.prevScrollPos > currentScrollPos) {
      this.isNavbarHidden = false; // Show the navbar when scrolling up
    } else {
      this.isNavbarHidden = true; // Hide the navbar when scrolling down
    }

    this.prevScrollPos = currentScrollPos;
  }
}
