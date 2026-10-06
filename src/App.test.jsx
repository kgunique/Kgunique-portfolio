import { act, cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe('App', () => {
  it('renders the portfolio home page', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.home')).not.toBeNull();
    expect(container.querySelectorAll('.hero_deck_card')).toHaveLength(5);
    expect(container.querySelector('.hero_orbit')).not.toBeNull();
    expect(container.querySelector('.orbit_binary')).toBeNull();
    expect(container.querySelector('.hero_visual img')).toBeNull();
    expect(container.querySelector('.hero_experience_badge strong').textContent).toBe('6+');
    expect(within(screen.getByRole('region', { name: 'Skills and expertise' })).queryByRole('button')).toBeNull();
  });

  it('cycles the hero typewriter through its developer headline', () => {
    vi.useFakeTimers();
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    for (let step = 0; step < 100 && !heading.textContent.includes('Full-Stack Engineer.'); step += 1) {
      act(() => {
        vi.advanceTimersByTime(100);
      });
    }
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Full-Stack Engineer.');
  });

  it('opens the mobile menu and closes it after selecting a section', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));
    const mobileNavigation = screen.getByRole('navigation', { name: 'Mobile navigation' });
    expect(mobileNavigation).toBeTruthy();
    fireEvent.click(within(mobileNavigation).getByRole('link', { name: 'Experience' }));
    expect(screen.getByRole('button', { name: 'Open navigation menu' }).getAttribute('aria-expanded')).toBe('false');
    expect(screen.getByRole('link', { name: 'Experience', current: 'location' })).toBeTruthy();
  });

  it('marks a clicked desktop navigation item as active', () => {
    render(<App />);
    fireEvent.click(within(screen.getByRole('navigation', { name: 'Main navigation' })).getByRole('link', { name: 'Skills' }));
    expect(screen.getByRole('link', { name: 'Skills', current: 'location' })).toBeTruthy();
  });

  it('automatically advances the stacked skills deck', () => {
    vi.useFakeTimers();
    render(<App />);
    const activeSlide = document.querySelector('.hero_deck_card.is-active');
    expect(activeSlide.getAttribute('aria-label')).toContain('Wireframes into polished UI.');
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(document.querySelector('.hero_deck_card.is-active').getAttribute('aria-label')).toContain('Reliable systems behind the UI.');
  });

  it('shows resume projects and experience details', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Shri Pandokhar Sarkar Dham' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Marry Me' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Used Car Buy & Sell Platform' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Codebucket Solutions (P) Ltd' })).toBeTruthy();
    expect(document.querySelector('.work_logo[src^="https://codebuckets.in/"]')).toBeTruthy();
    expect(document.querySelector('.work_logo[src="https://www.zpaysolutions.com/img/logo.png"]')).toBeTruthy();
    expect(screen.getByText(/20K\+ users/)).toBeTruthy();
    expect(screen.getByText('96karankkr@gmail.com')).toBeTruthy();
  });
});
