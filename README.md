# Fitness Forge 🏋️‍♂️

Fitness Forge is a premium, high-performance web application designed for a modern gym experience. Built with a focus on aesthetics, speed, and user engagement.

## 🚀 Built With

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Email**: [Resend](https://resend.com/)
- **Testing**:
  - [Vitest](https://vitest.dev/) (Unit/Component)
  - [Playwright](https://playwright.dev/) (E2E)
- **Validation**: [Zod](https://zod.dev/)

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- npm / pnpm / yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd gym
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables (see `.env.example`).

### Development

Run the development server:

```bash
npm run dev
```

### Testing

```bash
# Run unit and component tests
npm run test

# Run E2E tests with Playwright
npm run e2e

# Run all tests (Vitest + Playwright)
npm run test:all

# Generate coverage report
npm run test:coverage
```

### Build

```bash
npm run build
```

## 🔐 Environment Variables

Ensure you have the following keys in your `.env.local`:

```env
RESEND_API_KEY=re_...
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=...
```

## 🏗️ Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: UI components and layout sections.
- `src/lib`: Utility functions and validation schemas.
- `src/actions`: Server actions (e.g., email handling).
- `e2e`: Playwright E2E tests.
