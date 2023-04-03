/// <reference types="cypress" />

class NavigationPage {
  get caelNavTab() {
    return cy.contains('CAEL');
  }

  get pteNavTab() {
    return cy.contains('PTE');
  }

  get celpipNavTab() {
    return cy.contains('CELPIP');
  }

  get cdIeltsNavTab() {
    return cy.contains('CD-IELTS');
  }
  get pricingPackageDropdownOption() {
    return cy.contains('Pricing & Package');
  }

  get aboutDropdownOption() {
    return cy.contains('About');
  }

  get takeFreeDemoButton() {
    return cy.contains('Take Free Demo');
  }

  checkDispayedDropdownOptions() {
    this.pricingPackageDropdownOption.should('exist').log('Pricing & Package');
    this.aboutDropdownOption.should('exist').log('About');
  }

  opencCdIeltsDropdown() {
    this.cdIeltsNavTab.click();
  }

  openPteDropdown() {
    this.pteNavTab.click();
  }

  openCelpipDropdown() {
    this.celpipNavTab.click();
  }

  openCaelDropdown() {
    this.caelNavTab.click();
  }

  goToAboutPage() {
    this.cdIeltsNavTab.click();
    this.pricingPackageDropdownOption.should('exist');
    this.aboutDropdownOption.click({ force: true });
    cy.url().should('include', '/ielts');
  }

  goToFreeDemoPage() {
    this.takeFreeDemoButton.click();
    cy.url().should('include', '/signup');
  }
}

export default NavigationPage;
