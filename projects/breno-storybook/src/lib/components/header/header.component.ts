import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../base-components';

@Component({
  selector: 'bsb-header',
  standalone: true,
  imports: [NgStyle, NgClass, IconComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() label: string | number = 'Title';
  @Input() menuOptions: string[] = ['option 1', 'option 2', 'option example'];
  @Output() click: EventEmitter<string> = new EventEmitter<string>();
  @Output() goHome: EventEmitter<Event> = new EventEmitter<Event>();

  public isMenuOpen: boolean = false;

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public titleClick(): void {
    this.goHome.emit();
  }

  public optionClick(menuOption: string): void {
    this.click.emit(menuOption);
  }
}
