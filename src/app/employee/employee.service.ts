import {Component,Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { Headers } from "@angular/http";

@Injectable()
export class EmployeeService{

    constructor(private _http:Http){

    }

    onGetData(){
        return this._http.get('http://localhost:4442/app')
        .map((response : Response) => response.json());
    }

    
        getPostdataList(dataget){
           
        var params = dataget;
        var headers =new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:4442/app/login',params,{
            headers:headers
        })
      
        .map((response : Response) => response.json())
          .share();
    }
    
}