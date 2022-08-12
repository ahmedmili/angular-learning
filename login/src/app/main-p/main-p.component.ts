import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-main-p',
  templateUrl: './main-p.component.html',
  styleUrls: ['./main-p.component.css']
})
export class MainPComponent implements OnInit {

  constructor(private route :Router) { 

  }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('token');
    console.log('token remover')
    console.log(localStorage.getItem("token"))
    this.route.navigate(["/login"])
  }

}
