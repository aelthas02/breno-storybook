import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Button',
    disabled: false,
    loading: false,
    class: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
    loading: false,
    class: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    disabled: false,
    loading: false,
    class: 'secondary',
  },
};

export const Success: Story = {
  args: {
    label: 'Button',
    disabled: false,
    loading: false,
    class: 'success',
  },
};

export const Error: Story = {
  args: {
    label: 'Button',
    disabled: false,
    loading: false,
    class: 'error',
  },
};

export const Info: Story = {
  args: {
    label: 'Button',
    disabled: false,
    loading: false,
    class: 'info',
  },
};

export const WidthFill: Story = {
  args: {
    label: 'Button',
    disabled: false,
    loading: false,
    class: 'primary',
    size: 'width-fill',
  },
};

export const WidthFillLoading: Story = {
  args: {
    label: 'Button',
    disabled: false,
    loading: true,
    class: 'primary',
    size: 'width-fill',
  },
};
