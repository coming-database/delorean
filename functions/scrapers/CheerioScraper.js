const BaseScraper = require('./BaseScraper')
const requestPromise = require('request-promise')
const cheerio = require('cheerio')

class CheerioScraper extends BaseScraper {
  constructor(props) {
    super(props)
    const { url, process = new Function() } = props
    this.url = url
    this.process = process
    this.request()
  }
  request() {
    requestPromise(this.url)
      .then(html => {
        const $ = cheerio.load(html)
        this.process($)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

module.exports = CheerioScraper
