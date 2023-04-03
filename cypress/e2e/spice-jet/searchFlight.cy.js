/// <reference types="cypress" />

import SearchTripPage from './pages/searchFlight.page';

describe('SpiceJet', () => {
  const spiceJetUrl = Cypress.env('spiceJetUrl');
  const searchTripPage = new SearchTripPage();

  beforeEach(() => {
    cy.visit(spiceJetUrl);
    cy.viewport(1024, 768);
  });

  it('should search for a round trip flight', () => {
    searchTripPage.selectRoundButton();
    searchTripPage.selectFromAirport('Agra');
    searchTripPage.selectToAirport('Jaipur');
    searchTripPage.selectDate('May', '2023', '1');
    searchTripPage.selectDate('May', '2023', '15');
    searchTripPage.selectPassengers();
    searchTripPage.selectAdultsNumber('2');
    searchTripPage.selectInfantNumber('1');
    searchTripPage.selectChildNumber('3');
    searchTripPage.selectCurrency('USD');
    searchTripPage.submit();
    cy.url().should(
      'include',
      '/search?from=AGR&to=JAI&tripType=2&departure=2023-05-01&adult=2&child=3&srCitizen=0&infant=1&return=2023-05-15&currency=USD&redirectTo=/'
    );
  });
});
