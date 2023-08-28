import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from '../user-services.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent {
constructor(private formBuilder:FormBuilder,private usreServices:UserServicesService,private router:Router){}
loginForm = this.formBuilder.group({
  email: new FormControl("",[Validators.required ]),
  password: new FormControl("",[Validators.required])
})

onSubmit(){
  console.log(this.loginForm.value);
  
if(this.loginForm.valid){
this.usreServices.loginuser(this.loginForm.value).subscribe(response=>{
  if(response.success){
    console.log(response);
    alert(response.message);
    this.gotodashbord();
  }else{
    alert(response.message);
  }
})
}

// console.log(this.loginForm.value);
// this.usreServices.loginuser(this.loginForm.value)
// .subscribe({
//   next:(response:any) =>{
//     console.log(response);
//   },
//   error:error =>{
//     console.log(error);
//   }
// })

}

gotodashbord(){
this.router.navigate([
  'home'
])
}
}
