import type { Meta, StoryObj } from '@storybook/angular';
import { CustomImageComponent } from './custom-image.component';

const meta: Meta<CustomImageComponent> = {
  title: 'Custom Image',
  component: CustomImageComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {

    size: 'md',
  },
};

export default meta;
type Story = StoryObj<CustomImageComponent>;

export const xs: Story = {
  args: {

    size: 'xs',
  },
};

export const sm: Story = {
  args: {

    size: 'sm',
  },
};

export const md: Story = {
  args: {

    size: 'md',
  },
};

export const lg: Story = {
  args: {

    size: 'lg',
  },
};
export const xl: Story = {
  args: {

    size: 'xl',
  },
};

export const xxl: Story = {
  args: {

    size: 'xxl',
  },
};
