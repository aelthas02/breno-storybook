import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconSizes } from '../../../../types/icons-sizes.type';
import { ColorsEnum } from '../../../../types';

@Component({
  selector: 'bsb-icon',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './bsb-icon.component.html',
  styleUrl: './bsb-icon.component.scss',
})
export class IconComponent {
  @Input() size: IconSizes = 'default-md';
  @Input() icon: string = '';
  @Input() color: ColorsEnum = ColorsEnum.ORANGE;
}
