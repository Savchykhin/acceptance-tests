/// <reference types="cypress" />

class SearchPage {
  get searchTitle() {
    return cy.get('#advsearch-title');
  }

  get submitButton() {
    return cy.get('input[type=Submit]');
  }

  get searchYearReleaseMin() {
    return cy.get('#advsearch-yearpublished-min');
  }

  get searchYearReleaseMax() {
    return cy.get('#advsearch-yearpublished-max');
  }

  get searchMinPlayingTime() {
    return cy.get('#advsearch-min-playing-time');
  }

  get searchMaxPlayingTime() {
    return cy.get('#advsearch-max-playing-time');
  }

  searchForGame(title) {
    this.searchTitle.type(title);
    this.searchYearReleaseMin.type('1999');
    this.searchYearReleaseMax.type('2000');
    this.searchMinPlayingTime.select('15');
    this.searchMaxPlayingTime.select('90');
    this.submit();
  }

  submit() {
    this.submitButton.click();
  }
}

export default SearchPage;
