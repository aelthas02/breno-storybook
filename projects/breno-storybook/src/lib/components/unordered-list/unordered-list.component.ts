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
  @Input() stringList: string[] = ['List item 1', 'List item 2', 'List item 3'];
  @Input() color: ColorsEnum = ColorsEnum.WHITE;
}
