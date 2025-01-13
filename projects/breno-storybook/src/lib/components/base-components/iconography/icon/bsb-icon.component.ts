import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bsb-icon',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './bsb-icon.component.html',
  styleUrl: './bsb-icon.component.scss',
})
export class IconComponent {
  @Input() size?: string = 'default-md';
  @Input() icon?: string = '';
  @Input() color?: string = '';
}
