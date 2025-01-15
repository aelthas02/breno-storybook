import type { Meta, StoryObj } from '@storybook/angular';
import { CustomImageComponent } from './custom-image.component';

const meta: Meta<CustomImageComponent> = {
  title: 'Custom Image',
  component: CustomImageComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    imgUrl:
      'https://media.licdn.com/dms/image/v2/C4D03AQFxYFjWLLp4yQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1556458573668?e=1742428800&v=beta&t=2AaqfooxONKR4jORTmf8-_lNyzSO7f4PEEsK9DE0kSI',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<CustomImageComponent>;

export const xs: Story = {
  args: {
    imgUrl:
      'https://media.licdn.com/dms/image/v2/C4D03AQFxYFjWLLp4yQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1556458573668?e=1742428800&v=beta&t=2AaqfooxONKR4jORTmf8-_lNyzSO7f4PEEsK9DE0kSI',
    size: 'xs',
  },
};

export const sm: Story = {
  args: {
    imgUrl:
      'https://media.licdn.com/dms/image/v2/C4D03AQFxYFjWLLp4yQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1556458573668?e=1742428800&v=beta&t=2AaqfooxONKR4jORTmf8-_lNyzSO7f4PEEsK9DE0kSI',
    size: 'sm',
  },
};

export const md: Story = {
  args: {
    imgUrl:
      'https://media.licdn.com/dms/image/v2/C4D03AQFxYFjWLLp4yQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1556458573668?e=1742428800&v=beta&t=2AaqfooxONKR4jORTmf8-_lNyzSO7f4PEEsK9DE0kSI',
    size: 'md',
  },
};

export const lg: Story = {
  args: {
    imgUrl:
      'https://media.licdn.com/dms/image/v2/C4D03AQFxYFjWLLp4yQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1556458573668?e=1742428800&v=beta&t=2AaqfooxONKR4jORTmf8-_lNyzSO7f4PEEsK9DE0kSI',
    size: 'lg',
  },
};
export const xl: Story = {
  args: {
    imgUrl:
      'https://media.licdn.com/dms/image/v2/C4D03AQFxYFjWLLp4yQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1556458573668?e=1742428800&v=beta&t=2AaqfooxONKR4jORTmf8-_lNyzSO7f4PEEsK9DE0kSI',
    size: 'xl',
  },
};

export const xxl: Story = {
  args: {
    imgUrl:
      'https://media.licdn.com/dms/image/v2/C4D03AQFxYFjWLLp4yQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1556458573668?e=1742428800&v=beta&t=2AaqfooxONKR4jORTmf8-_lNyzSO7f4PEEsK9DE0kSI',
    size: 'xxl',
  },
};
