import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { baseUrl } from 'src/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http:HttpClient) { }
  adduser(payload:any):Observable<any>{
    console.log("payload values", payload)
    return this.http.post<any>('http://localhost:8000/user/postUser',payload)
  }
  loginuser(payload:any):Observable<any>{
    
    return this.http.post<any>(`http://localhost:8000/user/loginUser`,payload)
  }
}
