import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http : HttpClient) { }

  addUser(data) : Observable<any>{
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/application/x-www-form-urlencoded');
    return this.http.post('http://localhost:5001/gagavox-678bd/us-central1/app/api/users', data, {headers : headers});
  }

}
