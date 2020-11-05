import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appReverse]'
})
export class ReverseDirective {
  element: ElementRef;
  constructor(el: ElementRef) {
  }
  @HostListener('load') onMouseEnter(event: any) {
    const target = event.target;
    target.innerHtml = (target.name as string).split('').reverse().join('');
  }


}
