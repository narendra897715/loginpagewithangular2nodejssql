import { Component,OnInit } from "@angular/core";
import {EmployeeService} from '../employee/employee.service'

@Component({
    selector:'login-page',
    templateUrl : 'login.html',
    providers:[EmployeeService]
})

export class LoginComponent {
    username:string;
    password:string;

    loginObject = {
        "username":'',
        "password":''
    }
    status : any;
    constructor(private _employeeservice : EmployeeService){

    }
    

    verifyuser() {
         this._employeeservice.getPostdataList(this.loginObject)
             .subscribe((employee56) => this.status = employee56)

            console.log(this.status);
        }
    

    
 
 

       
    
}