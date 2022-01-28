/// <reference types="cypress" />

const burmese = {
  "adaptability": 5,
  "affection_level": 5,
  "alt_names": "",
  "cfa_url": "http://cfa.org/Breeds/BreedsAB/Burmese.aspx",
  "child_friendly": 4,
  "country_code": "MM",
  "country_codes": "MM",
  "description": "Burmese love being with people, playing with them, and keeping them entertained. They crave close physical contact and abhor an empty lap. They will follow their humans from room to room, and sleep in bed with them, preferably under the covers, cuddled as close as possible. At play, they will turn around to see if their human is watching and being entertained by their crazy antics.",
  "dog_friendly": 5,
  "energy_level": 4,
  "experimental": 0,
  "grooming": 1,
  "hairless": 0,
  "health_issues": 3,
  "hypoallergenic": 1,
  "id": "bure",
  "image": {
    "height": 650,
    "id": "4lXnnfxac",
    "url": "https://cdn2.thecatapi.com/images/4lXnnfxac.jpg",
    "width": 1250
  },
  "indoor": 0,
  "intelligence": 5,
  "lap": 1,
  "life_span": "15 - 16",
  "name": "Burmese",
  "natural": 0,
  "origin": "Burma",
  "rare": 0,
  "reference_image_id": "4lXnnfxac",
  "rex": 0,
  "shedding_level": 3,
  "short_legs": 0,
  "social_needs": 5,
  "stranger_friendly": 5,
  "suppressed_tail": 0,
  "temperament": "Curious, Intelligent, Gentle, Social, Interactive, Playful, Lively",
  "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/burmese",
  "vetstreet_url": "http://www.vetstreet.com/cats/burmese",
  "vocalisation": 5,
  "weight": {
    "imperial": "6 - 12",
    "metric": "3 - 5"
  },
  "wikipedia_url": "https://en.wikipedia.org/wiki/Burmese_(cat)"
};
const siamese = {
  "adaptability": 5,
  "affection_level": 5,
  "alt_names": "Siam, Thai Cat",
  "cfa_url": "http://cfa.org/Breeds/BreedsSthruT/Siamese.aspx",
  "child_friendly": 4,
  "country_code": "TH",
  "country_codes": "TH",
  "description": "While Siamese cats are extremely fond of their people, they will follow you around and supervise your every move, being talkative and opinionated. They are a demanding and social cat, that do not like being left alone for long periods.",
  "dog_friendly": 5,
  "energy_level": 5,
  "experimental": 0,
  "grooming": 1,
  "hairless": 0,
  "health_issues": 1,
  "hypoallergenic": 1,
  "id": "siam",
  "image": {
    "height": 811,
    "id": "ai6Jps4sx",
    "url": "https://cdn2.thecatapi.com/images/ai6Jps4sx.jpg",
    "width": 1110
  },
  "indoor": 0,
  "intelligence": 5,
  "lap": 1,
  "life_span": "12 - 15",
  "name": "Siamese",
  "natural": 0,
  "origin": "Thailand",
  "rare": 0,
  "reference_image_id": "ai6Jps4sx",
  "rex": 0,
  "shedding_level": 2,
  "short_legs": 0,
  "social_needs": 5,
  "stranger_friendly": 5,
  "suppressed_tail": 0,
  "temperament": "Active, Agile, Clever, Sociable, Loving, Energetic",
  "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/siamese",
  "vetstreet_url": "http://www.vetstreet.com/cats/siamese",
  "vocalisation": 5,
  "weight": {
    "imperial": "8 - 15",
    "metric": "4 - 7"
  },
  "wikipedia_url": "https://en.wikipedia.org/wiki/Siamese_(cat)"
}
const breedsList = [burmese, siamese]
const categories = [
  {
    "id": 5,
    "name": "boxes"
  },
  {
    "id": 15,
    "name": "clothes"
  },
  {
    "id": 1,
    "name": "hats"
  },
  {
    "id": 14,
    "name": "sinks"
  },
  {
    "id": 2,
    "name": "space"
  },
  {
    "id": 4,
    "name": "sunglasses"
  },
  {
    "id": 7,
    "name": "ties"
  }
]
context('Search for an image, see results, mark as favorite', () => {
  it('lets me search for an image', () => {
    const kittySearch = 'chubby applehead siamese'
    const boxesId = 5
    cy.intercept('GET', 'https://api.thecatapi.com/v1/breeds', breedsList)
    cy.intercept('GET', 'https://api.thecatapi.com/v1/categories', categories)
    cy.visit('http://localhost:3000')
    cy.get('#breed-select').select("Siamese").should('have.value', siamese.id)
    cy.get('#category-select').select("boxes").should('have.value', boxesId)
  })
})
