import movieData from "../../src/dummy"

describe('Movie Page', () => {
  beforeEach(()=>{
    // visit localhost
    cy.visit('http://localhost:3000/694919')
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

  it('as a user, if the network request fails, I should see a message on the page letting me know.  Movies should still be visible upon returning to the homescreen with the error message gone', () => {
    
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 401,
      ok: false,
      statusText: "Not Found"
    })

    cy.get('.serverError').contains('p', 'Movie not found.')
    .get('.rt-logo').click()
    .get(".Movies").find(".card--link").should("have.length", 40)
    .get('.serverError').should('not.exist')
  });

  it('as a user, if the network request fails while retrieving the trailer, a backdrop img should be visible in place of the trailer', () => {
    
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {
      statusCode: 401,
      ok: false,
      statusText: "Not Found"
    })

    cy.get('.backdrop').should('exist')
      .get('.backdrop').should('have.attr', 'src').should('eq', 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg')
  });

  it('user sees video, details containing rating, release date, genre, run time, and overview.', () => {
    expect(true).to.equal(true)
    cy.get('.information').contains('h3','Money Plane')
    .get('header').should('be.visible')
    .get('.rt-logo').should('be.visible')
    .get('.information').contains('p','2020, Action / Comedy, 2h 5m')
    .get('.information').contains('span', '66%')
    .get('.rating-img').should('have.attr', 'src').should('include', '/static/media/tomato.b8416d23ec32ff330201.png')
    .get('.selectedPoster').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
    .get('.overview').contains('p', `It's the money plane!!!!`)
    .get('.trailer').should('have.attr', 'src').should('include', 'https://www.youtube.com/embed/aETz_dRDEys')
  })

  it('as a user I should be able to click on the home button and the changes to the url should be reflected', () => {
    cy.get('.rt-logo').click()
    .url().should('eq', 'http://localhost:3000/')
  });

})
