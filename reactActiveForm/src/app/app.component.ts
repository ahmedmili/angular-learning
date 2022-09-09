import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

   mailListe: Array<any> = [];

  // title = 'reactActiveForm';

  form = new FormGroup({
    first_name: new FormControl('',[Validators.required,Validators.maxLength(6)]),
    last_name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)])
    })

    onSubmit(){
      this.mailListe.push(this.form.value.email)
      console.log(this.form.value.email)
    }

}
