import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorsEnum } from '../../../types';

@Component({
  selector: 'bsb-text',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  @Input() label: string = 'Text';
  @Input() color: ColorsEnum = ColorsEnum.WHITE;
  @Input() fontSize: number = 20;
  @Input() fontWeight: string = '';
}
