import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  name : string = "";
  address : string = "";
  phone : string = "";
  email : string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
