import type { Meta, StoryObj } from '@storybook/angular';
import Button from './button.component';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
// import { useArgs } from '@storybook/manager-api';

// import { toMatchImageSnapshot } from 'jest-image-snapshot';

// expect.extend({ toMatchImageSnapshot });
// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  render: (args: Button) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<Button>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    // await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

    // await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));

    // 👇 Assert DOM structure
    await expect(
      canvas.getByRole(
        'button',
      )
    ).toBeInTheDocument();

    await waitFor(() => expect(args['onClick']).toHaveBeenCalledTimes(1));
  }
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
