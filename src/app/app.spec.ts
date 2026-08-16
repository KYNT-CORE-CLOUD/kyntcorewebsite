import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the two-column hero layout with an AI visual', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.hero-layout')).not.toBeNull();
    expect(compiled.querySelector('.hero-visual img')).not.toBeNull();
    expect(compiled.querySelector('.eyebrow')?.textContent).toContain('THE FUTURE IS INTELLIGENT');
    expect(compiled.querySelector('.hero-buttons a.btn-primary')?.textContent).toContain('Explore Solutions');
    expect(compiled.querySelector('.hero-buttons a.btn-secondary')?.textContent).toContain('View Projects');
  });
});
