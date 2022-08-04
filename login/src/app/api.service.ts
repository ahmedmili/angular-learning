import {Injectable,Output,EventEmitter} from '@angular/core';
import {map} from 'rxjs/operators';

import {HttpClient} from '@angular/common/http';
import { users } from './users';

@Injectable({
    providedIn:'root'
})

export class ApiService {
baseUrl:string = 'http://localhost:8000/';
constructor(private httpClient : HttpClient){}
     
    public userregistration(f_name:any,l_name:any,email:any,password:any,mobile:any){
            return this.httpClient.post<any>(this.baseUrl + '/register' ,
            {f_name,l_name,email,password,mobile}
            ).pipe(map(Users=>{
                return Users;
            }))
        }

}





