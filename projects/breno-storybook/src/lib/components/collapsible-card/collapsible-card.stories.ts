import type { Meta, StoryObj } from '@storybook/angular';
import { CollapsibleCardComponent } from './collapsible-card.component';
import { ColorsEnum } from '../../types';

const meta: Meta<CollapsibleCardComponent> = {
  title: 'Collapsible Card Component',
  component: CollapsibleCardComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<CollapsibleCardComponent>;

export const CollapsibleCardOpen: Story = {
  args: {
    cardContent: {
      title: 'APOSTA GANHA',
      skills: ['Angular', 'TypeScript'],
      listContent: [
        {
          item: 'SENIOR FRONTEND DEVELOPER - jun 2024 -> present',
          subitem:
            'Experience during a war room of development of a new system in Angular 17 as a product, using Design System, Storybook and Monorepo architecture using Nx.',
        },
        {
          item: 'FRONTEND DEVELOPER - dez 2022 -> jun 2024',
          subitem:
            '• AngularJS development and maintenance of a betting system with several kind of betting options. Cassino and live games such as: Football, volleyball, basketball, casinos, reality shows, politics, minigames etc.',
        },
      ],
    },
    isCardOpen: true,
    stripeColor: ColorsEnum.ORANGE,
    textColor: ColorsEnum.WHITE,
    titleTextColor: ColorsEnum.BLACK,
  },
};

export const CollapsibleCardGreenClosedNoSkills: Story = {
  args: {
    cardContent: {
      title: 'Card title',
      skills: [],
      listContent: [
        { item: 'Test item 1', subitem: 'Bla bla bla bla' },
        { item: 'Item 2' },
      ],
    },
    stripeColor: ColorsEnum.GREEN,
    textColor: ColorsEnum.BLACK,
    titleTextColor: ColorsEnum.WHITE,
  },
};
