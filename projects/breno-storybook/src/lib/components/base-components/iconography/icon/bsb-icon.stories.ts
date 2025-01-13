import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './bsb-icon.component';
import { icons } from '../../../../types';

const meta: Meta<IconComponent> = {
  title: 'Icon',
  component: IconComponent,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: icons,
    },
    color: { control: 'color' },
    size: {
      control: 'select',
      options: [
        'xs',
        'default-xs',
        'default-sm',
        'default-md',
        'default-l',
        'default-xl',
      ],
    },
  },
};

export const Primary: Story = {
  args: {
    size: 'default-xl',
    color: 'black',
    icon: 'heart',
  },
};

export default meta;
type Story = StoryObj<IconComponent>;
