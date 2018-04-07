import { Directive , ElementRef , Input} from '@angular/core';

@Directive({
  selector: '[appEventHighlighter]'
})
export class EventHighlighterDirective {
@Input() highlightColor: string;
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'blue';
   }
  

}
