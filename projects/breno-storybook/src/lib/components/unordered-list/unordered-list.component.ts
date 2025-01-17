import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorsEnum } from '../../types';

@Component({
  selector: 'bsb-unordered-list',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.scss'],
})
export class UnorderedListComponent {
  @Input() list: { item: string; subitem?: string }[] = [
    { item: 'List item 1' },
    { item: 'List item 2' },
    { item: 'List item 3' },
  ];
  @Input() color: ColorsEnum = ColorsEnum.WHITE;
}
