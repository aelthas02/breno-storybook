import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IconComponent,
  TextComponent,
  TitleComponent,
} from '../base-components';

@Component({
  selector: 'bsb-card',
  standalone: true,
  imports: [NgStyle, NgClass, IconComponent, TextComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title: string = 'Title';
  @Input() isMobile: boolean = false;
  @Input() maxWidth: number = 450;
  @Input() isCloseEnabled: boolean = true;
  @Output() closeModal: EventEmitter<Event> = new EventEmitter<Event>();

  public close(): void {
    this.closeModal.emit();
  }
}
