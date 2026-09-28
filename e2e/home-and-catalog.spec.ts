import { test, expect } from '@playwright/test'

test.describe('Navegação Pública e Catálogo (Critérios A01 e A14)', () => {
  test('deve carregar a home page com seções principais', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Piscinão Soluções/)
    
    // Header visível
    const header = page.locator('header')
    await expect(header).toBeVisible()

    // Seção de análise da água
    const waterSection = page.locator('text=Análise Gratuita da Água')
    await expect(waterSection).toBeVisible()
  })

  test('deve navegar pelo catálogo sem exigir login', async ({ page }) => {
    await page.goto('/catalogo')
    await expect(page).toHaveTitle(/Catálogo/)
    
    // Verificar que a lista ou busca está presente
    const heading = page.locator('h1')
    await expect(heading).toContainText(/Catálogo/)
  })

  test('deve acessar a página de análise da água', async ({ page }) => {
    await page.goto('/analise-agua')
    await expect(page.locator('text=Pré-cadastro para Análise')).toBeVisible()
  })

  test('deve acessar a página de parceiro pro', async ({ page }) => {
    await page.goto('/parceiro-pro')
    await expect(page.locator('text=Programa Parceiro Pro')).toBeVisible()
  })
})
