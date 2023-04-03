/// <reference types="cypress" />
import { times } from 'lodash';

class SearchTripPage {
  get roundButton() {
    return cy.get('[data-testid="round-trip-radio-button"]');
  }

  get fromAirportInput() {
    return cy
      .get('[data-testid="to-testID-origin"]')
      .contains('From')
      .next()
      .find('input');
  }

  get toAirportInput() {
    return cy
      .get('[data-testid="to-testID-destination"]')
      .contains('To')
      .next()
      .find('input');
  }

  get passengers() {
    return cy.get('[data-testid="home-page-travellers"]');
  }

  get submitButton() {
    return cy.get('[data-testid="home-page-flight-cta"]');
  }

  get currency() {
    return cy.contains('Currency');
  }

  getDateElement(month, year) {
    return cy.get(`[data-testid="undefined-month-${month}-${year}"]`);
  }

  selectPassengers() {
    this.passengers.click();
  }

  selectInfantNumber(number) {
    if (number === 1) {
      cy.get('[data-testid="Infant-testID-plus-one-cta"]').click();
    } else {
      times(number, () =>
        cy.get('[data-testid="Infant-testID-plus-one-cta"]').click()
      );
    }
  }

  selectAdultsNumber(number) {
    if (number > 1) {
      times(number - 1, () =>
        cy.get('[data-testid="Adult-testID-plus-one-cta"]').click()
      );
    }
  }

  selectChildNumber(number) {
    if (number === 1) {
      cy.get('[data-testid="Children-testID-plus-one-cta"]').click();
    } else {
      times(number, () =>
        cy.get('[data-testid="Children-testID-plus-one-cta"]').click()
      );
    }
  }

  selectRoundButton() {
    this.roundButton.click();
  }

  selectToAirport(name) {
    this.toAirportInput.type(name).click();
    cy.contains(name).click();
  }

  selectFromAirport(name) {
    this.fromAirportInput.click();
    cy.contains(name).click();
  }

  selectDate(month, year, date) {
    this.getDateElement(month, year).contains(date).click();
  }

  selectCurrency(currencyName) {
    this.currency.click();
    cy.contains(currencyName).click();
  }

  submit() {
    this.submitButton.click();
  }
}
export default SearchTripPage;
