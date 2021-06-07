import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollbar]'
})
export class ScrollbarDirective {

  constructor() { }

  // @HostListener('scroll', ['$event'])

  // doSomething(event) {
  //   var winScroll = event.currentTarget.scrollTop;
  //   var height = event.currentTarget.scrollHeight - event.currentTarget.clientHeight;
  //   var scrolled = (winScroll / height) * 100;

  //   console.debug("Scrolled %", scrolled);
  //   document.getElementById('scrollBar').style.width = scrolled + "%";
  // }

}
