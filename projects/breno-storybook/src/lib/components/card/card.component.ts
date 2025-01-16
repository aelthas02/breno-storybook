import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../base-components';

@Component({
  selector: 'bsb-card',
  standalone: true,
  imports: [NgStyle, NgClass, IconComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title: string = 'Title';
  @Input() isMobile: boolean = false;
  @Input() maxWidth: number = 450;
  @Input() isCloseEnabled: boolean = true;
  @Output() closeModal: EventEmitter<Event> = new EventEmitter<Event>;

  public close(): void {
    this.closeModal.emit();
  } 
}
