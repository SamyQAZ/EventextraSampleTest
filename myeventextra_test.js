/// <reference types="Cypress" />

describe('My first test', function () {
	it('Visit eventexta and signup', function() {
		cy.visit('https://app.eventxtra.com/')

		cy.url()
		  .should('include', '/users/sign_in')

		cy.get('.sc-cvbbAY').type('test12@eventextra.com')  

		cy.get('.xtra-button').click()

		cy.get(':nth-child(1) > .xtra-text-field > .sc-cvbbAY').type('Abc')

		cy.get('.row > :nth-child(2) > .xtra-text-field > .sc-cvbbAY').type('Xyz')

		cy.get('.sc-gipzik > .xtra-text-field > .sc-cvbbAY').type('Test@evenetexta')
		
		cy.get('.xtra-button').click()

		cy.get('#xtra-phone-field').type('93412345')

		cy.get('.sc-cvbbAY').type('ABC Limited')

		cy.get('.css-15vtxi2 > .css-1hwfws3').contains('Less than 500 registrants')

		cy.get('.xtra-button').click()

	})

	it('Create event from landing page', function () {

    // https://app.eventxtra.com/parties

    		cy.get('#hosting-block > .sc-kGXeez').contains('I am hosting')

    		cy.get('#exhibiting-block').contains('I am exhibiting / attending')

		cy.get('#hosting-block > .sc-kGXeez').click()    	

    		cy.get('.positive-btn').click()
		
		cy.get('.positive-btn').contains('Skip for now')
		  .click() 	 
   
		// Fill in the form
		cy.get('#party_name').type('Business Meet & Greet')

		cy.get(':nth-child(2) > [style="width: 50%; padding-right: 16px;"] > .rdt > :nth-child(1) > .dropdown-toggle').click()
		
		cy.get(':nth-child(2) > [style="width: 50%; padding-right: 16px;"] > .rdt > .rdtPicker > .rdtDays > table > tbody > :nth-child(5) > [data-value="29"]').click()

  		cy.get('#event-type > .css-15vtxi2 > .css-1hwfws3')
		  .select(['Conference', 'Networking event'])  
  })

})


