import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorsEnum } from '../../types';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'bsb-stripe',
  standalone: true,
  imports: [NgStyle, NgClass, ButtonComponent],
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss'],
})
export class StripeComponent {
  @Input() backgroundColor: ColorsEnum = ColorsEnum.ORANGE;
  @Input() labelColor: ColorsEnum = ColorsEnum.ORANGE;
  @Input() label: string = 'Title';
  @Input() enableCredentialButton: boolean = false;
  @Input() credentialUrl: string = '';

  public credentialClick(): void {
    window.open(this.credentialUrl);
  }
}
