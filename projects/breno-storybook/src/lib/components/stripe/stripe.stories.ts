import type { Meta, StoryObj } from '@storybook/angular';
import { StripeComponent } from './stripe.component';
import { ColorsEnum } from '../../types';

const meta: Meta<StripeComponent> = {
  title: 'Stripe',
  component: StripeComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<StripeComponent>;

export const Stripe: Story = {
  args: {
    backgroundColor: ColorsEnum.ORANGE,
    labelColor: ColorsEnum.BLACK,
    label: 'Title example',
  },
};

export const StripeWithCredentialButton: Story = {
  args: {
    backgroundColor: ColorsEnum.ORANGE,
    labelColor: ColorsEnum.BLACK,
    label: 'Reactive Angular course with RxJS',
    enableCredentialButton: true,
    credentialUrl:
      'https://www.udemy.com/certificate/UC-88966ec3-1439-4d77-9b46-6e638fee1c7f/',
  },
};
