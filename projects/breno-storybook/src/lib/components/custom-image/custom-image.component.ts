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
    'https://media.licdn.com/dms/image/v2/D4D03AQFCczwf5_zHpQ/profile-displayphoto-shrink_800_800/B4DZRwAFw9GUAc-/0/1737045859861?e=1742428800&v=beta&t=tv7rXiVTJFPY9sKfIyoshETWCU4MTJ55QqFhJi78ss8';
  @Input() size: ImgSizes = 'md';
}
