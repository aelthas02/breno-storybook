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
    list: [
      {
        item: 'Item 1 example',
        subitem:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      { item: 'Item 2 example' },
    ],
    color: ColorsEnum.BLACK,
  },
};

export const UnorderedListWithTitle: Story = {
  args: {
    title: 'Title example',
    titleColor: ColorsEnum.BLACK,
    list: [
      {
        item: 'Item 1 example',
        subitem:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      { item: 'Item 2 example' },
    ],
    color: ColorsEnum.BLACK,
  },
};

export const UnorderedListWithTitleAndIcon: Story = {
  args: {
    title: 'Title example',
    titleColor: ColorsEnum.BLACK,
    titleIcon: 'globe',
    titleIconColor: ColorsEnum.ORANGE,
    list: [
      { item: 'Item 1 example' },
      { item: 'Item 2 example' },
      { item: 'Item 3 example' },
      {
        item: 'Item 4 example',
        subitem:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
    color: ColorsEnum.BLACK,
  },
};
