import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
username: string ='';
  constructor() { }

  ngOnInit() {
  }

  onPress(){
       this.username = "";
  }

  notEmpty(): number{
    if(this.username==="")
    return 1;

    return 0;
  }
}
