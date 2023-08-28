import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faDashboard, faDiagramProject, faHome, faRegistered, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router:Router){}

  title = 'Wildster';
  public sidebarShow: boolean = false;
  faHome = faHome;
  faDashbord = faDashboard;
  faregistere = faRegistered;
  faUser = faUser;
  faProject = faDiagramProject

  onSubmit(){
    //this.router.navigate(['/userReig'])
  }
}
