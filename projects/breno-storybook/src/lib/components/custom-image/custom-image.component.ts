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
  @Input() imgUrl = '/assets/img/profile-img.jpg';
  @Input() size: ImgSizes = 'md';
}
