import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonComponent } from './button.component';
import { ColorsEnum } from '../../types';

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
    buttonColor: ColorsEnum.ORANGE,
    labelColor: ColorsEnum.BLACK,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
    loading: false,
    class: 'primary',
    buttonColor: ColorsEnum.ORANGE,
    labelColor: ColorsEnum.BLACK,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    disabled: false,
    loading: false,
    class: 'secondary',
    buttonColor: ColorsEnum.LIGHT_GREY,
    labelColor: ColorsEnum.WHITE,
  },
};

export const Success: Story = {
  args: {
    label: 'Button',
    disabled: false,
    loading: false,
    class: 'success',
    buttonColor: ColorsEnum.GREEN,
    labelColor: ColorsEnum.WHITE,
  },
};

export const Error: Story = {
  args: {
    label: 'Button',
    disabled: false,
    loading: false,
    class: 'error',
    buttonColor: ColorsEnum.RED,
    labelColor: ColorsEnum.WHITE,
  },
};

export const Info: Story = {
  args: {
    label: 'Button',
    disabled: false,
    loading: false,
    class: 'info',
    buttonColor: ColorsEnum.BLUE,
    labelColor: ColorsEnum.WHITE,
  },
};

export const WidthFill: Story = {
  args: {
    label: 'Button',
    disabled: false,
    loading: false,
    class: 'primary',
    size: 'width-fill',
    buttonColor: ColorsEnum.ORANGE,
    labelColor: ColorsEnum.BLACK,
  },
};

export const WidthFillLoading: Story = {
  args: {
    label: 'Button',
    disabled: false,
    loading: true,
    class: 'primary',
    size: 'width-fill',
    buttonColor: ColorsEnum.ORANGE,
    labelColor: ColorsEnum.BLACK,
  },
};
