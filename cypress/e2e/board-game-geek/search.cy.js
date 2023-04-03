/// <reference types="cypress" />

import SearchPage from './pages/search.page';

describe('BoardGameGeek', () => {
  const boardGamegeekUrl = Cypress.env('boardGamegeekUrl');
  const searchPage = new SearchPage();

  beforeEach(() => cy.visit(boardGamegeekUrl));

  it('should search for a game and find the result', () => {
    const title = "Harry Potter and the Sorcerer's Stone Trivia Game";
    searchPage.searchForGame(title);
    cy.contains('a', title)
      .should('be.visible')
      .invoke('attr', 'href')
      .then((text) => {
        cy.log(`The link text is: ${text}`);
      });
  });
});
