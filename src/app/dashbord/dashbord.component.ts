import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectservicesService } from '../projectservices.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {

  dashBoardCount:any=[];

  constructor(private projectServices : ProjectservicesService,private router:Router){
  
  }
  ngOnInit(): void {

    this.getDashboardCount();
  }

  getDashboardCount()
{
  this.projectServices.getDashboardCount().subscribe(res=>{
    console.log(res.data);
    this.dashBoardCount=res.data;
    
  })
}
gotoProjectDetailsPage(){
  this.router.navigate([
    'projectinfo'
  ])
}
}
