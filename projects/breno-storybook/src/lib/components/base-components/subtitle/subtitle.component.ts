import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorsEnum } from '../../../types';

@Component({
  selector: 'bsb-subtitle',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss'],
})
export class SubtitleComponent {
  @Input() label: string | number = 'Subtitle';
  @Input() color: ColorsEnum = ColorsEnum.WHITE;

  public subtitleSignColor: string = ColorsEnum.ORANGE;
}
