import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/classes/Employee';

@Injectable({
  providedIn: 'root'
})
export class SalaryChartService {

  employeesUrl = "http://localhost:3001/employees"

  constructor(private httpClient : HttpClient) { }

  getAllEmployees() {
    return this.httpClient.get<Employee[]>(this.employeesUrl)
  }

  addNewEmployee(newEmployee : Employee) {
    return this.httpClient.post(this.employeesUrl, newEmployee)
  }
}
