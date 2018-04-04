import {Component, OnInit} from '@angular/core'
import {EmployeeService} from './employee.service'

@Component({
    selector : 'employee-list',
    templateUrl : 'employeelist.component.html',
    styleUrls: ['./employee.component.css'],
    providers : [EmployeeService]
})

export class EmployeeListComponent implements OnInit {

    employees : string;
    constructor(private _employeeservice : EmployeeService){

    }
 
    ngOnInit() {

        this._employeeservice.onGetData()
            .subscribe((employeeData) => this.employees = employeeData)
    }


    }