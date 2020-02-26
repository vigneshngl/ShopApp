import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  @Input()
  height : number

  constructor(private elementRef?: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.height = (this.height * 1.5)
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.height = this.height
  }

}
