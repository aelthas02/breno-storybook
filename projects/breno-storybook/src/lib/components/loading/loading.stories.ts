import type { Meta, StoryObj } from '@storybook/angular';
import { LoadingComponent } from './loading.component';
import { ColorsEnum } from '../../types';

const meta: Meta<LoadingComponent> = {
  title: 'Loading',
  component: LoadingComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<LoadingComponent>;

export const Loading: Story = {
  args: {},
};

export const LoadingLargeBlue: Story = {
  args: { size: 'lg', color: ColorsEnum.BLUE },
};
