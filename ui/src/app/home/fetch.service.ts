import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import EmployeeRes from './employee_res.vo';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private httpClient: HttpClient) { }
  fetchData():Observable<EmployeeRes> {
    return this.httpClient.get<EmployeeRes>("https://dummy.restapiexample.com/api/v1/employees");
  }

  sayHello():Observable<EmployeeRes> {
    console.log (" api env "+environment.apiUrl)
    return this.httpClient.get<EmployeeRes>(environment.apiUrl+"/api/demo/hello");
  }
}
