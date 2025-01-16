import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Card = (args: any) => ({
  props: args,
  template: `
  <bsb-card [title]="'Title example'" [maxWidth]="500" >
   <span>Content example</span><br/>
   <span>Content example</span><br/>
   <span>Content example</span>
  </bsb-card>`,
});

export const CardMobile = (args: any) => ({
  props: args,
  template: `
  <bsb-card [title]="'Title example'" [maxWidth]="500" [isMobile]="true" >
   <span>Content example</span><br/>
   <span>Content example</span><br/>
   <span>Content example</span>
  </bsb-card>`,
});

export const CardMobileNoClose = (args: any) => ({
  props: args,
  template: `
  <bsb-card [title]="'Title example'" [maxWidth]="500" [isMobile]="true" [isCloseEnabled]="false" >
   <span>Content example</span><br/>
   <span>Content example</span><br/>
   <span>Content example</span>
  </bsb-card>`,
});
