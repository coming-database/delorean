const CheerioScraper = require('../scrapers/CheerioScraper')

const PLAYSTATION_EN_US_COMINGSOON =
  'https://store.playstation.com/en-us/grid/STORE-MSF77008-PS3PSNPREORDERS/1'
const PRODUCT_BASE_URL = 'https://store.playstation.com/en-us/product/'

const cheerioScraper = new CheerioScraper({
  url: PLAYSTATION_EN_US_COMINGSOON,
  process: $ => {
    const games = JSON.parse($('[type="application/ld+json"]').html())['@graph']
    games.forEach(({ name, image, offers = [], sku }) => {
      const usOffer = offers.find(offer => offer.priceCurrency.toLowerCase() === 'usd')
      const price = usOffer ? usOffer.price : ''
      const imageUrl = image.split('?')[0]
      const url = `${PRODUCT_BASE_URL}${sku}`
    })
  }
})
