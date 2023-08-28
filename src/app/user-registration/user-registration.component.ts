import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from '../user-services.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  constructor(private formBuilder: FormBuilder, private userServices: UserServicesService,private router: Router) { }
  registractionForm = this.formBuilder.group({
    firstName: new FormControl("",[Validators.required ]),
    lastName: new FormControl("",[Validators.required ]),
    email: new FormControl("",[Validators.required ]),
    phoneNo: new FormControl("",[Validators.required ]),
    password: new FormControl("",[Validators.required ])
  });
  onSubmit() {
    // if(this.registractionForm.valid){
    //   this.userServices.adduser(this.registractionForm.value).subscribe(response=>{
    //     if(response.success){
    //       console.log(response);
    //       alert(response.message);
    //     }else{
    //       alert(response.message);
    //     }
    //   })
    //   }

    console.log(this.registractionForm.value);
    this.userServices.adduser(this.registractionForm.value)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          alert(response.message);
          this.gotologin();
        },
        error: error => {
          console.log(error);
          alert(error);
        }

      })
  }

  gotologin(){
this.router.navigate([
  'userLogin'
])
  }
}
