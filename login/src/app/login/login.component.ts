import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormBuilder} from '@angular/forms'
import {ApiService} from '../api.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  angForm: FormGroup;

  constructor(private fb:FormBuilder,
    private dataService:ApiService,
    // private router:Router
    ) {

      this.angForm = this.fb.group({
        email : ['',Validators.required,Validators.email],
        password : ['',Validators.required]
      })
     }

  ngOnInit(): void {
  }

  postdata(angForm:any){
      this.dataService.userlogin(
        angForm.value.email,
        angForm.value.password,
      )
  }


}
