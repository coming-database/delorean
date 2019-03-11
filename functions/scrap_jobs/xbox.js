const CheerioScraper = require('../scrapers/CheerioScraper')

const XBOX_EN_US_COMINGSOON = 'https://www.microsoft.com/en-us/store/coming-soon/games/xbox'
const BASE_URL = 'https://www.microsoft.com'

const cheerioScraper = new CheerioScraper({
  url: XBOX_EN_US_COMINGSOON,
  process: $ => {
    const items = $('.m-channel-placement-item')
    items.map((index, element) => {
      const url = `${BASE_URL}${$('> a', element).attr('href')}`
      const imageUrl = $('picture img', element)
        .attr('data-src')
        .replace(/\&w=[\d]+\&h=[\d]+/, '')
      const name = $('.c-channel-placement-content h3', element).text()
      const price = $('.c-channel-placement-price [itemprop="price"]', element)
        .attr('content')
        .replace('$', '')
    })
  }
})
