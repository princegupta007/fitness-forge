import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
    test('should load and display main sections', async ({ page }) => {
        await page.goto('/')

        // Check title
        await expect(page).toHaveTitle(/FITNESS FORGE/i)

        // Check for main navigation
        const nav = page.locator('nav')
        await expect(nav).toBeVisible()

        // Check for Hero section
        await expect(page.getByText(/FORGE YOUR/i)).toBeVisible()

        // Check for Programs section
        const programsHeader = page.getByRole('heading', { name: /Train for results/i })
        await expect(programsHeader).toBeVisible()

        // Check for Trainers section
        const trainersHeader = page.getByRole('heading', { name: /Meet the forge masters/i })
        await expect(trainersHeader).toBeVisible()
    })

    test('should navigate to programs page', async ({ page }) => {
        await page.goto('/')

        const programsLink = page.getByRole('link', { name: /^Programs$/i }).first()
        await programsLink.click()

        await expect(page).toHaveURL(/\/programs/)
    })
})