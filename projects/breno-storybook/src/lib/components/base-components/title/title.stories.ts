import type { Meta, StoryObj } from '@storybook/angular';
import { TitleComponent } from './title.component';
import { ColorsEnum } from '../../../types';

const meta: Meta<TitleComponent> = {
  title: 'Title',
  component: TitleComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<TitleComponent>;

export const Title: Story = {
  args: {
    label: 'Title example',
    color: ColorsEnum.BLACK,
  },
};
