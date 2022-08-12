import { Component, OnInit } from '@angular/core';
import { Observer} from 'rxjs'

// import { Router, ActivatedRoute } from '@angular/router';
import {ApiService} from './api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor( private dataService:ApiService,){}
  
tokenValidator :boolean = false;

ngOnInit(): void {
  this.verifTokenHandler()

}


verifTokenHandler(){
        this.dataService.verifToken()
      .then(res=>{
              this.tokenValidator=res
              console.log("token inside data value = "+this.tokenValidator)  
          })

}



}
