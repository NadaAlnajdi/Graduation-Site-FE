import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient) {}
  users: any = [];
  ngOnInit(): void {
    this.getUsers();
  }

  options = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  getUsers() {
    this.http.get(`${environment.baseUrl}user/all`).subscribe(
      (res) => {
        this.users = res['data'];
      },
      (err) => console.log(err)
    );
  }
  delUser(id: any) {
    this.http.delete(`${environment.baseUrl}user/del/${id}`).subscribe(
      (res) => this.getUsers(),
      (err) => console.log(err)
    );
  }
}
