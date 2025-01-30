import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorsEnum } from '../../types';
import { ButtonComponent } from '../button/button.component';
import { IconComponent, TextComponent } from '../base-components';

@Component({
  selector: 'bsb-stripe',
  standalone: true,
  imports: [NgStyle, NgClass, ButtonComponent, TextComponent, IconComponent],
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss'],
})
export class StripeComponent {
  @Input() backgroundColor: ColorsEnum = ColorsEnum.ORANGE;
  @Input() labelColor: ColorsEnum = ColorsEnum.BLACK;
  @Input() label: string = 'Title';
  @Input() enableCredentialButton: boolean = false;
  @Input() credentialUrl: string = '';
  @Input() isCollapsibleIcon: boolean = false;

  public white: ColorsEnum = ColorsEnum.WHITE;
  public green: ColorsEnum = ColorsEnum.GREEN;
  public isOpenCollapsible: boolean = false;

  public credentialClick(): void {
    window.open(this.credentialUrl);
  }

  public openCollapsible(): void {
    if (this.isCollapsibleIcon)
      this.isOpenCollapsible = !this.isOpenCollapsible;
  }
}
