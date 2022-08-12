import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router'
import {Validators,FormGroup,FormBuilder, FormControl} from '@angular/forms'
import {ApiService} from '../api.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   status! : string;
  angForm! : FormGroup;

  constructor(private fb:FormBuilder,
    private dataService:ApiService,
    // private route:Router
    ) {
     this.angForm = this.fb.group({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl ('' , [Validators.required])
    })
    }

  ngOnInit(): void {
   
  }

  postdata(angForm:any){
    // console.log(angForm.get('email'))
    if (angForm.get('email').status == 'INVALID'){
      // console.log(angForm.get('email').status)
      if (angForm.get('email').errors.required == true) {
        // console.log("zone required")
        this.status ="** REQUIRED INPUT **"
      }else if (angForm.get('email').errors.email == true){
        // console.log("invalid format")
        this.status ="** INVALIDE FORMAT**"
      }
    }else {
      this.status = '';
       this.dataService.userlogin(
        angForm.value.email,
        angForm.value.password,
      )
      // this.route.navigate(['/main'])
      // this.router.navigate
    }
    }
     


}
