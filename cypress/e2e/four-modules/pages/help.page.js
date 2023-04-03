/// <reference types="cypress" />

class HelpPage {
  get closeHelpButton() {
    return cy.get('button[class=close]').contains('×');
  }

  get pricingAnyQuestionsButton() {
    return cy.contains('Any Questions?');
  }

  get pricingTextHelp() {
    return cy.contains('How can we help');
  }
  openHelpModal() {
    this.pricingAnyQuestionsButton.should('be.visible').click();
    this.pricingTextHelp.should('be.visible');
  }

  closeHelpModal() {
    this.closeHelpButton.click();
  }
}

export default HelpPage;
