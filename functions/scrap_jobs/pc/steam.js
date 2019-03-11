const CheerioScraper = require('../scrapers/CheerioScraper')

const STEAM_COMINGSOON =
  'https://store.steampowered.com/search/?category1=998%2C21%2C10&os=win&filter=comingsoon'

const cheerioScraper = new CheerioScraper({
  url: STEAM_COMINGSOON,
  process: $ => {
    const items = $('#search_result_container .search_result_row ')
    items.map((index, element) => {
      const url = $(element)
        .attr('href')
        .split('?')[0]
      const name = $('.title', element).text()
      console.log(name)
    })
  }
})
