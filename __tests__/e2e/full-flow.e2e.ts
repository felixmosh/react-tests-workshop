describe('full browser flow', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  it('should show movie list', async () => {
    await expect(page.title()).resolves.toMatch('MoviesAPP');
    const input = await page.$('[data-testid="filter-input"]');
    await input.type('joker');
    const jokerCard = await page.$('[data-testid="movie-card"] a');

    await jokerCard.click();
    const text = (await page.$('[data-testid="movie-description"]')).evaluate(
      elm => elm.textContent
    );

    await expect(text).resolves.toContain('During the 1980s');
  });
});
