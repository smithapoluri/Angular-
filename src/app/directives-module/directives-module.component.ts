import { Component, OnInit } from '@angular/core';
import { EventHighlighterDirective } from '../directives/event-highlighter.directive';
@Component({
  selector: 'app-directives-module',
  templateUrl: './directives-module.component.html',
  styleUrls: ['./directives-module.component.css']
})
export class DirectivesmoduleComponent implements OnInit {
  message: string='';
  showContent = false;
  
  log = [];

  constructor() { }

  ngOnInit() {
  }

  notEmpty(): number{
    if(this.message==="")
    return 1;

    return 0;
  }

  onToggleDisplay(){
    this.log.push(new Date());
    if(this.showContent)
    {
      this.showContent = false;
    }else{
      this.showContent = true;
    }
    this.showContent;
}

}
