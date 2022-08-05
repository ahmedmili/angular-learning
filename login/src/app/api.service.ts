import {Injectable,Output,EventEmitter} from '@angular/core';
// import {map} from 'rxjs/operators';

// import {HttpClient} from '@angular/common/http';
// import { users } from './users';
import Axios from "axios";
@Injectable({
    providedIn:'root'
})

export class ApiService {
// baseUrl:string = 'http://localhost:8000/';
// constructor(private httpClient : HttpClient){}
     
    // public userregistration(f_name:any,l_name:any,email:any,password:any,mobile:any){
    //         return this.httpClient.post<any>(this.baseUrl + '/register' ,
    //         {f_name,l_name,email,password,mobile}
    //         ).pipe(map(Users=>{
    //             return Users;
    //         }))
    //     }
    
    
    public userlogin(email:any,password:any){
        Axios.post("http://localhost:8000/api/login/", {
            email: email,
            password: password,
        }).then((response)=>{
            console.log(response.data.status)
            if(response.data.status === 2){
                console.log("login succes")  
            }
        })
    }
    
    public userregistration(f_name:any,l_name:any,email:any,password:any,mobile:any){
        Axios.post("http://localhost:8000/api/add/", {
        first_name: f_name,
        last_name: l_name,
        password: password,
        phone_num:mobile,
        email:email,
        }).then((response)=>{
            // console.log(Response.status)
            if (response.status === 200){
              window.location.replace('http://localhost:4200/login')
              console.log('acc added')
            }
          })
    }

}





