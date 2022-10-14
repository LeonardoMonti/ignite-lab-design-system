import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SignIn } from './SignIn';

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  arg: {},
  argTypes: {}
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'leonardo@story.com.br')
    userEvent.type(canvas.getByPlaceholderText('******'), 'password')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })
  }
}