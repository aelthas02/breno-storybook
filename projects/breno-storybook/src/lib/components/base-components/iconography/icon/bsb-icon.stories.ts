import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './bsb-icon.component';
import { ColorsEnum, Icons, IconSizes } from '../../../../types';

const meta: Meta<IconComponent> = {
  title: 'Icon',
  component: IconComponent,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Icons,
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
    color: ColorsEnum.ORANGE,
    icon: 'heart',
  },
};

export default meta;
type Story = StoryObj<IconComponent>;
