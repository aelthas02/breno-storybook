import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonClass, ButtonSize } from '../../types';

@Component({
  selector: 'bsb-button',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string | number = 'Button';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() class: ButtonClass = 'primary';
  @Input() size: ButtonSize = 'normal';

  @Output()
  onClick = new EventEmitter<Event>();

  public click(): void {
    this.onClick.emit();
  }
}
