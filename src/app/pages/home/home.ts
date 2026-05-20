import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  // We default to true for the dark theme to create an immediate modern "wow" effect!
  readonly isDarkMode = signal<boolean>(true);
  
  // Dashboard mock active tab
  readonly activeTab = signal<string>('analytics');
  
  // Billing cycle selection (monthly/yearly)
  readonly isYearlyBilling = signal<boolean>(false);
  
  // Contact form submission state
  readonly formSubmitted = signal<boolean>(false);

  /**
   * Toggles the active theme (light/dark mode)
   */
  toggleTheme(): void {
    this.isDarkMode.update(prev => !prev);
  }

  /**
   * Sets the active tab for the live dashboard simulation
   */
  setActiveTab(tab: string): void {
    this.activeTab.set(tab);
  }

  /**
   * Toggles between monthly and yearly pricing models
   */
  toggleBillingCycle(): void {
    this.isYearlyBilling.update(prev => !prev);
  }

  /**
   * Simulated form submission handler
   */
  onSubmit(event: Event): void {
    event.preventDefault();
    this.formSubmitted.set(true);
    
    // Auto-hide the success notification after 5 seconds
    setTimeout(() => {
      this.formSubmitted.set(false);
    }, 5000);
  }

  /**
   * Smoothly scrolls the window to the selected anchor section ID
   */
  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
