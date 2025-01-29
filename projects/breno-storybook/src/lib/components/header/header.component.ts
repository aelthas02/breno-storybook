import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent, TextComponent } from '../base-components';
import { ColorsEnum } from '../../types';

@Component({
  selector: 'bsb-header',
  standalone: true,
  imports: [NgStyle, NgClass, IconComponent, TextComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() label: string = 'Title';
  @Input() menuOptions: { label: string; route: string }[] = [
    { label: 'option 1', route: 'string' },
    { label: 'option 2', route: 'string' },
    { label: 'option example', route: 'string' },
  ];
  @Output() click: EventEmitter<string> = new EventEmitter<string>();
  @Output() goHome: EventEmitter<Event> = new EventEmitter<Event>();

  public isMenuOpen: boolean = false;
  public black: ColorsEnum = ColorsEnum.BLACK;
  public darkGrey: ColorsEnum = ColorsEnum.DARK_GREY;

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public titleClick(): void {
    this.goHome.emit();
  }

  public optionClick(route: string): void {
    this.click.emit(route);
    this.isMenuOpen = false;
  }
}
