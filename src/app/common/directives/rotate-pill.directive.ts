import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appPillMovement]',
  standalone: true
})
export class PillMovementDirective {
  private rotation = (Math.random()*30)-15;
  @Input() pillIndex:number = 0;

  constructor() { }
  @HostBinding('style.transform') get getRotation() {
    return `rotate(${this.rotation}deg)`;
  }  

}
