import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImgSizes } from '../../types';

@Component({
  selector: 'bsb-custom-image',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './custom-image.component.html',
  styleUrls: ['./custom-image.component.scss'],
})
export class CustomImageComponent {
  @Input() imgUrl: string =
    'https://media.licdn.com/dms/image/v2/C4D03AQFxYFjWLLp4yQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1556458573668?e=1742428800&v=beta&t=2AaqfooxONKR4jORTmf8-_lNyzSO7f4PEEsK9DE0kSI';
  @Input() size: ImgSizes = 'md';
}
