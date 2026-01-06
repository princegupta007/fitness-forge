import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import ContactForm from './ContactForm'
import { sendEmail } from '@/app/actions/sendEmail'

// Mock the server action
vi.mock('@/app/actions/sendEmail', () => ({
  sendEmail: vi.fn(),
}))

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('shows loading state and success message upon successful submission', async () => {
    const user = userEvent.setup()
    vi.mocked(sendEmail).mockImplementation(async () => {
      await new Promise((resolve) => setTimeout(resolve, 50))
      return { success: true, message: 'Message Sent!' }
    })

    render(<ContactForm />)

    await user.type(screen.getByLabelText(/Full Name/i), 'John Doe')
    await user.type(screen.getByLabelText(/Email Address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/Message/i), 'Hello there! This is a test message.')

    await user.click(screen.getByRole('button', { name: /Send Message/i }))

    await waitFor(
      () => {
        expect(screen.getByText(/Message Sent!/i)).toBeInTheDocument()
      },
      { timeout: 3000 }
    )
  })

  it('shows error message upon failed submission', async () => {
    const user = userEvent.setup()
    vi.mocked(sendEmail).mockResolvedValue({
      success: false,
      message: 'Failed to send',
      error: 'Something went wrong'
    })

    render(<ContactForm />)

    await user.type(screen.getByLabelText(/Full Name/i), 'John Doe')
    await user.type(screen.getByLabelText(/Email Address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/Message/i), 'Hello there! This is a test message.')

    await user.click(screen.getByRole('button', { name: /Send Message/i }))

    await waitFor(() => {
      expect(screen.getByText(/Failed to send/i)).toBeInTheDocument()
    })
  })
})
