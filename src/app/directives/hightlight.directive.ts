import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[hightlight]',
  exportAs: 'hightlighter',
  standalone: true,
})
export class HightlightDirective {
  @Input('hightlight')
  public hightlight = false;

  @Output()
  public hightLightChange = new EventEmitter<boolean>();

  @HostBinding('class.hightlight')
  get class() {
    return this.hightlight ? 'hightlight' : '';
  }

  @HostListener('mouseover')
  public onMouseOver() {
    this.hightlight = true;
    this.hightLightChange.emit(this.hightlight);
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.hightlight = false;
    this.hightLightChange.emit(this.hightlight);
  }

  public toggle(): void {
    this.hightlight = !this.hightlight;
    this.hightLightChange.emit(this.hightlight);
  }
}
