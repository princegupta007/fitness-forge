import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SectionHeader from './SectionHeader'

describe('SectionHeader', () => {
  it('renders the title correctly', () => {
    render(<SectionHeader title="Unique Title" />)
    expect(screen.getByText('Unique Title')).toBeInTheDocument()
  })

  it('renders the subtitle when provided', () => {
    render(<SectionHeader title="Title" subtitle="Our Subtitle" />)
    expect(screen.getByText('Our Subtitle')).toBeInTheDocument()
  })

  it('renders the description when provided', () => {
    render(<SectionHeader title="Title" description="Detailed description text" />)
    expect(screen.getByText('Detailed description text')).toBeInTheDocument()
  })

  it('applies centered class when centered prop is true', () => {
    const { container } = render(<SectionHeader title="Title" centered />)
    expect(container.firstChild).toHaveClass('text-center')
  })

  it('applies custom className', () => {
    const { container } = render(<SectionHeader title="Title" className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
