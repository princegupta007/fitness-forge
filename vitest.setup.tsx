import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock Next.js navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  }),
}))

// Mock Framer Motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}> {children} </div>,
    span: ({ children, ...props }: any) => <span {...props}> {children} </span>,
    h1: ({ children, ...props }: any) => <h1 {...props}> {children} </h1>,
    p: ({ children, ...props }: any) => <p {...props}> {children} </p>,
  },
  AnimatePresence: ({ children }: any) => <>{children} </>,
}))

// Mock Sanity Client
vi.mock('@/sanity/lib/client', () => ({
  sanityFetch: vi.fn(),
  urlFor: () => ({
    url: () => 'https://placeholder.com/image.jpg',
  }),
}))
