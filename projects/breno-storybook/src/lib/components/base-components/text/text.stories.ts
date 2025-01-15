import type { Meta, StoryObj } from '@storybook/angular';
import { TextComponent } from './text.component';
import { ColorsEnum } from '../../../types';

const meta: Meta<TextComponent> = {
  title: 'Text',
  component: TextComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    label: 'Text example',
    color: ColorsEnum.BLACK,
  },
};

export default meta;
type Story = StoryObj<TextComponent>;

export const Text: Story = {
  args: {
    label: 'Text example',
    color: ColorsEnum.BLACK,
  },
};
