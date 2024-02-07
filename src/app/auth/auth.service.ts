import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

// import jwtDecode from 'jwt-decode';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: any = '';
  userInfo = new BehaviorSubject(null);
  user: any;
  isOwner = new Subject<boolean>();

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('token');
    if (!token) return;
    this.userInfo.next(token);
  }

  register(formData: any) {
    return this.http.post(`${environment.baseUrl}user/register`, formData);
  }

  login(formData: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}user/login`, formData).pipe(
      map((res: any) => {
        this.setToken(res.data.token);
        localStorage.setItem(
          'user',
          JSON.stringify({ ...res.data.user, ownerId: res.data.ownerId })
        );
        return res;
      })
    );
  }
  logout(): Observable<any> {
    // return this.http.post(`http://localhost:3000/user/logout` , null);
    return this.http.post(`https://graduation-be-final.onrender.com/user/logout` , null);
  }

  deleteLocalStorage() {
    this.userInfo.next(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  setToken(payload): void {
    localStorage.setItem('token', payload);
    this.userInfo.next(payload);
  }
}
