import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorsEnum } from '../../types';
import { StripeComponent } from '../stripe/stripe.component';
import { UnorderedListComponent } from '../unordered-list/unordered-list.component';

export interface CardContent {
  title: string;
  skills?: string[];
  listContent: { item: string; subitem?: string }[];
}

@Component({
  selector: 'bsb-collapsible-card',
  standalone: true,
  imports: [NgStyle, NgClass, StripeComponent, UnorderedListComponent],
  templateUrl: './collapsible-card.component.html',
  styleUrls: ['./collapsible-card.component.scss'],
})
export class CollapsibleCardComponent {
  @Input() cardContent: CardContent = {
    title: 'Title example',
    skills: ['Angular', 'TypeScript'],
    listContent: [
      { item: 'item 1 example', subitem: 'blablabla' },
      { item: 'item 1 example' },
    ],
  };
  @Input() stripeColor: ColorsEnum = ColorsEnum.ORANGE;
  @Input() titleTextColor: ColorsEnum = ColorsEnum.BLACK;
  @Input() textColor: ColorsEnum = ColorsEnum.WHITE;
  @Input() isCardOpen: boolean = false;

  public openCard(): void {
    this.isCardOpen = !this.isCardOpen;
  }

  public setSkillsString(): string {
    return 'Skills: ' + this.cardContent.skills?.join(', ').toString();
  }
}
