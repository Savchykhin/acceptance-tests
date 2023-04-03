/// <reference types="cypress" />
import NavigationPage from './pages/navigation.page';
import HelpPage from './pages/help.page';

describe('fourmodules', () => {
  const fourmodulesUrl = Cypress.env('fourmodulesUrl');
  const navigationPage = new NavigationPage();
  const helpPage = new HelpPage();

  beforeEach(() => cy.visit(fourmodulesUrl));

  it('should navigate to About page and open Help modal', () => {
    navigationPage.goToAboutPage();
    helpPage.openHelpModal();
    helpPage.closeHelpModal();
  });

  it('should open Free Demo', () => {
    navigationPage.goToFreeDemoPage();
  });

  it('should display CD-IELTS dropdown options', () => {
    navigationPage.opencCdIeltsDropdown();
    navigationPage.checkDispayedDropdownOptions();
  });

  it('should display PTE dropdown options', () => {
    navigationPage.openPteDropdown();
    navigationPage.checkDispayedDropdownOptions();
  });

  it('should display CELPIP dropdown options', () => {
    navigationPage.openCelpipDropdown();
    navigationPage.checkDispayedDropdownOptions();
  });

  it('should display CAEL dropdown options', () => {
    navigationPage.openCaelDropdown();
    navigationPage.checkDispayedDropdownOptions();
  });
});
