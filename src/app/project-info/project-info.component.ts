import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProjectservicesService } from '../projectservices.service';
import { DatePipe } from '@angular/common';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {
  formData:any = [];
  projectDetails:any=[];
  prjectForm = this.formBuilder.group({
    EnterProject : new FormControl ("",[Validators.required]),
    Reason : new FormControl ("",[Validators.required]),
    Type : new FormControl ("",[Validators.required]),
    Division : new FormControl ("",[Validators.required]),
    Category : new FormControl ("",[Validators.required]),
    Priority : new FormControl ("",[Validators.required]),
    Department : new FormControl ("",[Validators.required]),
    StartDate : new FormControl ("",[Validators.required]),
    EndDate : new FormControl ("",[Validators.required]),
    location : new FormControl ("",[Validators.required]),
    Status : new FormControl ("",[Validators.required])
  });
constructor(private projectServices : ProjectservicesService, private formBuilder : FormBuilder,private datePipe: DatePipe,private router:Router){
  this.prjectForm.controls.Status.setValue('Start');
}
ngOnInit(): void {

  this.getProjectDetails();
}
onSubmit(){
  console.log(this.prjectForm.value);
  this.formData.push(this.prjectForm.value);

  this.projectServices.addProject(this.prjectForm.value)
  .subscribe({
    next: (response:any)=>{
      console.log(response);
      alert(response.message);
      this.prjectForm.controls.Status.setValue('Start');

    },
    error:error=>{
      console.log(error);
      alert
      
    }
  })
  // this.userServices.adduser(this.registractionForm.value)
  // .subscribe({
  //   next: (response: any) => {
  //     console.log(response);
  //     alert(response.message);
  //     this.gotologin();
  //   },
  //   error: error => {
  //     console.log(error);
  //     alert(error);
  //   }

  // })
  
}


getProjectDetails()
{
  this.projectServices.getProjectDetails().subscribe(res=>{
    console.log(res.data);
    this.projectDetails=res.data;
    
  })
}

updateProjectDetails(element:any,button:any)
{
  element.button=button;
  element.StartDate=this.datePipe.transform(element.StartDate, 'yyyy-MM-dd');
  element.EndDate=this.datePipe.transform(element.EndDate, 'yyyy-MM-dd');
  this.projectServices.updateProjectDetails(element).subscribe(res=>{
    console.log(res);
    if(res.success)
    {
      this.getProjectDetails();
    }
    else
    {
      alert("Something went wrong")
    }
  })
}

gotoDashbordPage(){
this.router.navigate(['dashbord'])
}
}
