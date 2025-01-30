import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorsEnum } from '../../types';
import { ButtonComponent } from '../button/button.component';
import { TextComponent } from '../base-components';

@Component({
  selector: 'bsb-loading',
  standalone: true,
  imports: [NgStyle, NgClass, ButtonComponent, TextComponent],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @Input() color: ColorsEnum = ColorsEnum.ORANGE;
  @Input() size: 'md' | 'lg' = 'md';
}
