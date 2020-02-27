import { Component, OnInit } from '@angular/core';
import { SalaryChartService } from '../salary-chart.service';
import { Employee } from 'src/classes/Employee';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-salary-chart',
  templateUrl: './salary-chart.component.html',
  styleUrls: ['./salary-chart.component.css']
})
export class SalaryChartComponent implements OnInit {

  constructor(private salaryChartService : SalaryChartService) {
  }

  ngOnInit(): void {

    this.salaryChartService.getAllEmployees().subscribe(
      data => {
        console.log(data)

        let salarylist : any = []
        let departmentlist : any = []

        data.forEach(element => {
          salarylist.push(element.salary)
          departmentlist.push(element.department)
        });

        let chart = new Chart("lineChart", {
          type: "line",
          data: {
            labels: departmentlist,
            datasets: [
              {
                data: salarylist,
                borderColor: "blue",
                fill: true,
                label: "Salary"
              }
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{ display: true }],
              yAxes: [{ display: true }]
            }
          }
        })

        /* bar chart */

        //get unique department names using Set
        let deptNames = [...new Set(departmentlist)]

        let minSalaries = []
        let maxSalaries = []

        deptNames.forEach(dep => {
          minSalaries.push(Math.min(...(data.filter(e => e.department == dep).map(d => d.salary))))
          maxSalaries.push(Math.max(...(data.filter(e => e.department == dep).map(d => d.salary))))
        });        

        let barChart = new Chart("barChart", {
          type: "bar",
          data: {
            labels: deptNames,
            datasets: [
              {
                label: "Minimum salaries",
                backgroundColor: "red",
                borderColor: "red",
                borderWidth: 1,
                data: minSalaries
              },
              {
                label: "Maximum salaries",
                backgroundColor: "blue",
                borderColor: "blue",
                borderWidth: 1,
                data: maxSalaries
              }
            ]
          },
          options: {
            responsive: true,
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Bar Chart'
            }
          }
        })
      }
    )
  }

  addRandomEmployees() {
    let departments = [ "IT", "Transport", "Accounting", "HR", "Operations" ]
    let newEmployee = new Employee()

    for (let i = 0; i < 100; i++) {
      newEmployee.department = departments[i % 5]
      newEmployee.salary = Math.floor(Math.random() * 100000)
      this.salaryChartService.addNewEmployee(newEmployee).subscribe(
        data => data
      )
    }
  }
}
