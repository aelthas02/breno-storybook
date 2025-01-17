import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorsEnum } from '../../types';
import { IconComponent, TextComponent } from '../base-components';

@Component({
  selector: 'bsb-unordered-list',
  standalone: true,
  imports: [NgStyle, NgClass, TextComponent, IconComponent],
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.scss'],
})
export class UnorderedListComponent {
  @Input() title: string = '';
  @Input() titleColor: ColorsEnum = ColorsEnum.WHITE;
  @Input() titleIcon: string = '';
  @Input() titleIconColor: ColorsEnum = ColorsEnum.ORANGE;
  @Input() list: { item: string; subitem?: string }[] = [
    { item: 'List item 1' },
    { item: 'List item 2' },
    { item: 'List item 3' },
  ];
  @Input() color: ColorsEnum = ColorsEnum.WHITE;
}
