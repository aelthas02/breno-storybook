import type { Meta, StoryObj } from '@storybook/angular';
import { UnorderedListComponent } from './unordered-list.component';
import { ColorsEnum } from '../../types';

const meta: Meta<UnorderedListComponent> = {
  title: 'Unordered List',
  component: UnorderedListComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<UnorderedListComponent>;

export const UnorderedList: Story = {
  args: {
    stringList: ['Item 1 example', 'Item 2 example'],
    color: ColorsEnum.BLACK,
  },
};
