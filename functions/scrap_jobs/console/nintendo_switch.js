const CheerioScraper = require('../../scrapers/CheerioScraper')

const SWITCH_COMINGSOON = 'https://www.nintendo.com/games/coming-soon'

const cheerioScraper = new CheerioScraper({
  url: SWITCH_COMINGSOON,
  process: $ => {
    const items = $('.games-list .grid-item[data-system="nintendo-switch"]')
    console.log(items.length)
    items.map((inde, element) => {})
  }
})
