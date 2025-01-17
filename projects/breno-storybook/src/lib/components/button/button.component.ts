import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonSize, ColorsEnum } from '../../types';

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
  @Input() size: ButtonSize = 'normal';
  @Input() buttonColor: ColorsEnum = ColorsEnum.ORANGE;
  @Input() labelColor: ColorsEnum = ColorsEnum.WHITE;
  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();

  public click(): void {
    this.onClick.emit();
  }
}
