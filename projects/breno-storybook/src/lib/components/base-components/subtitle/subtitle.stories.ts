import type { Meta, StoryObj } from '@storybook/angular';
import { SubtitleComponent } from './subtitle.component';
import { ColorsEnum } from '../../../types';

const meta: Meta<SubtitleComponent> = {
  title: 'Subtitle',
  component: SubtitleComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<SubtitleComponent>;

export const Subtitle: Story = {
  args: {
    label: 'Subtitle example',
    color: ColorsEnum.BLACK,
  },
};
