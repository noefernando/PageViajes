// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private userDataSubject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url)
    .pipe(
      tap(user=>this.userDataSubject.next(user))
    );
  }
  getUserData():Observable<any>{
    return this.userDataSubject.asObservable();
  }
}