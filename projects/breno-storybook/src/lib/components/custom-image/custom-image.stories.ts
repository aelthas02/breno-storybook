import type { Meta, StoryObj } from '@storybook/angular';
import { CustomImageComponent } from './custom-image.component';

const meta: Meta<CustomImageComponent> = {
  title: 'Custom Image',
  component: CustomImageComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    imgUrl:
      'https://media.licdn.com/dms/image/v2/D4D03AQFCczwf5_zHpQ/profile-displayphoto-shrink_800_800/B4DZRwAFw9GUAc-/0/1737045859861?e=1742428800&v=beta&t=tv7rXiVTJFPY9sKfIyoshETWCU4MTJ55QqFhJi78ss8',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<CustomImageComponent>;

export const xs: Story = {
  args: {
    imgUrl:
      'https://media.licdn.com/dms/image/v2/D4D03AQFCczwf5_zHpQ/profile-displayphoto-shrink_800_800/B4DZRwAFw9GUAc-/0/1737045859861?e=1742428800&v=beta&t=tv7rXiVTJFPY9sKfIyoshETWCU4MTJ55QqFhJi78ss8',
    size: 'xs',
  },
};

export const sm: Story = {
  args: {
    imgUrl:
      'https://media.licdn.com/dms/image/v2/D4D03AQFCczwf5_zHpQ/profile-displayphoto-shrink_800_800/B4DZRwAFw9GUAc-/0/1737045859861?e=1742428800&v=beta&t=tv7rXiVTJFPY9sKfIyoshETWCU4MTJ55QqFhJi78ss8',
    size: 'sm',
  },
};

export const md: Story = {
  args: {
    imgUrl:
      'https://media.licdn.com/dms/image/v2/D4D03AQFCczwf5_zHpQ/profile-displayphoto-shrink_800_800/B4DZRwAFw9GUAc-/0/1737045859861?e=1742428800&v=beta&t=tv7rXiVTJFPY9sKfIyoshETWCU4MTJ55QqFhJi78ss8',
    size: 'md',
  },
};

export const lg: Story = {
  args: {
    imgUrl:
      'https://media.licdn.com/dms/image/v2/D4D03AQFCczwf5_zHpQ/profile-displayphoto-shrink_800_800/B4DZRwAFw9GUAc-/0/1737045859861?e=1742428800&v=beta&t=tv7rXiVTJFPY9sKfIyoshETWCU4MTJ55QqFhJi78ss8',
    size: 'lg',
  },
};
export const xl: Story = {
  args: {
    imgUrl:
      'https://media.licdn.com/dms/image/v2/D4D03AQFCczwf5_zHpQ/profile-displayphoto-shrink_800_800/B4DZRwAFw9GUAc-/0/1737045859861?e=1742428800&v=beta&t=tv7rXiVTJFPY9sKfIyoshETWCU4MTJ55QqFhJi78ss8',
    size: 'xl',
  },
};

export const xxl: Story = {
  args: {
    imgUrl:
      'https://media.licdn.com/dms/image/v2/D4D03AQFCczwf5_zHpQ/profile-displayphoto-shrink_800_800/B4DZRwAFw9GUAc-/0/1737045859861?e=1742428800&v=beta&t=tv7rXiVTJFPY9sKfIyoshETWCU4MTJ55QqFhJi78ss8',
    size: 'xxl',
  },
};
