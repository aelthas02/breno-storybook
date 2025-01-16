import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorsEnum } from '../../../types';

@Component({
  selector: 'bsb-title',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() label: string | number = 'Title';
  @Input() color: ColorsEnum = ColorsEnum.WHITE;

  public firstLetterUnderlineColor: string = ColorsEnum.ORANGE;
}
