import movieData from "../../src/dummy"

describe('Home Page', () => {
  beforeEach(()=>{
    // visit localhost
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 201,
    body: movieData
  })
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 201,
      body: {
        "movie": {
          "id": 694919,
          "title": "Money Plane",
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "release_date": "2020-09-29",
        "overview": "It's the money plane!!!!",
        "genres": [
        "Action",
        "Comedy"
        ],
        "runtime": 125,
        "average_rating": 6.666666666666667,
        }
      }
    })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos',{
      statusCode: 201,
      body: {
        "videos": [
          {
          "id": 1,
          "movie_id": 436270,
          "key": "aETz_dRDEys",
          "site": "YouTube",
          "type": "Trailer"
          }
        ]
      }  
    })
  })
  it('user sees a header, the home/logo button, and 40 movie cards when they visit the home page', () => {
    expect(true).to.equal(true)
    cy.get('header').should('be.visible')
    .get('.rt-logo').should('be.visible')
    .get(".Movies").find(".card--link").should("have.length", 40)
  });

  it('user sees a title, a rating with either a fresh tomato or rancid slime and a percentage, and a poster img for each card', () => {
    expect(true).to.equal(true)
    cy.get('.card--link').first().contains('p', 'Money Plane')
    .get('.card--link').last().contains('p', 'I Still Believe')
    .get('.rating').first().contains('span', '66%')
    .get('.poster').should('be.visible')
    .get('.poster').should('have.attr', 'style').should('include',`background-image: url("https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")`)
    .get('.tomato').should('be.visible')
    .get('.tomato').first().should('have.attr', 'src').should('include', '/static/media/tomato.b8416d23ec32ff330201.png')
    .get('.tomato').last().should('have.attr', 'src').should('include', '/static/media/green-slime.920d7e5db149537ea048.png')
  });
  
  it('as a user I should be able to click on a card and the url should change to a new id', () => {
    cy.get('.card--link').first().click()
    cy.url().should('include', '694919')
  });
  

  it('as a user I should be able to click on the home button and the changes to the url should be reflected', () => {
    cy.get('.rt-logo').click()
    .url().should('eq', 'http://localhost:3000/')
  });
})  