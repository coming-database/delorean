const BaseScraper = require('./BaseScraper')
const requestPromise = require('request-promise')
const $ = require('cheerio')

class PuppeteerScraper extends BaseScraper {
  constructor(props) {
    super(props)
  }
  scrap() {}
}

module.exports = PuppeteerScraper
