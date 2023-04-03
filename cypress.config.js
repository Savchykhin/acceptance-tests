const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "acceptance-tests",

  env: {
    fourmodulesUrl: "https://www.fourmodules.com/ ",
    boardGamegeekUrl: "https://www.boardgamegeek.com/advsearch/boardgame.com/",
    spiceJetUrl: "https://www.spicejet.com/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
