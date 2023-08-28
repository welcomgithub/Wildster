import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class ProjectservicesService {

  constructor(private http:HttpClient) { }

  addProject(payload:any):Observable<any>{
console.log("payload values"),payload;
return this.http.post<any>(`${baseUrl}postProject`, payload)
  }

  getProjectDetails():Observable<any>
  {
    return this.http.get<any>(`${baseUrl}getProjectDetiles`);
  }
  updateProjectDetails(payload:any):Observable<any>
  {
    return this.http.put<any>(`${baseUrl}updateProjectDetiles`,payload)
  }
  getDashboardCount():Observable<any>
  {
    return this.http.get<any>(`${baseUrl}getDashboardCount`);
  }
}
