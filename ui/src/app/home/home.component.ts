import { Component, OnInit } from '@angular/core';
import {FetchService} from './fetch.service'
import EmployeeVO from './employee.vo'
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  columnDefs: ColDef[] = [
    { field: 'employee_name' },
    { field: 'id' },
    { field: 'employee_age' },
    { field: 'employee_salary'}
];

rowData = [

];

  private employeeVO:EmployeeVO

  constructor(private fetchSrv: FetchService) { }

  ngOnInit(): void {
  }

  public fetch(){
    console.log(" fetch data now")
    this.fetchSrv.sayHello().subscribe(data => {
      console.log(" hello service "+data.strResponse)
    })
    this.fetchSrv.fetchData().subscribe(data =>{
       console.log("data result: this.employeeVO ");
       this.rowData = data.data
    });

    this.fetchSrv.fetchData().subscribe(data =>{
      console.log("data result: this.employeeVO ");
      this.rowData = data.data
   });
  }

  public hello():String{
    return "Hello Sandeep";
  }
}
