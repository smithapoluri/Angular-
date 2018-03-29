import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles:[`
  .count{
    background: green;
    color: white;
  }
`]
})
export class DirectivesComponent implements OnInit {
showContent = false;
events : Array<string> = [];

  constructor() { 
    this.showContent = false;
  }

  ngOnInit() {
  }
public onPress(): void{
  if(this.showContent)
  {
    this.showContent = false;
  }else{
    this.showContent = true;
  }
  this.events.push(event.timeStamp.toString());
  this.getColor();
 }

 public ShowContent():string{
   return this.showContent? 'block': 'none';
 }

 public getColor():string {
   var length = this.events.length;
  if(length!=0 && length>4)
  {
    return 'green';
  }
  else{
    return 'white';
  }
 }

 public EventsArray(): Array<string>{
    return this.events;
 }
}
 