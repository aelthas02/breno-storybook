import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { ColorsEnum } from '../../types';

const meta: Meta<HeaderComponent> = {
  title: 'Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Title: Story = {
  args: {
    label: 'Breno moreira - frontend developer',
    menuOptions: ['Experiences', 'Skills', 'Formation'],
  },
};
