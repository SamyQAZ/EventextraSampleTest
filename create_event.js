/// <reference types="Cypress" />


//SIGN-IN AND FOLLOW STEPS IN VIDEO
describe('Create first event', function () {
	it('Visit eventexta and signin', function() {
		cy.visit('https://app.eventxtra.com/users/sign_in')

		cy.url()
		  .should('include', '/users/sign_in')

		cy.get('.sc-cvbbAY').type('shamiya_event@protonmail.com')  

		cy.get('.xtra-button').click()

		cy.get('.sc-gipzik > .xtra-text-field > .sc-cvbbAY').type('Test@evenetexta')
		
		cy.get('.xtra-button').click()

		cy.get('.logo-container').click()

		cy.get(':nth-child(5) > .panel-heading > .sidebar-item > a').contains('Registration')
		  .click()

		cy.get('#registration-tab > :nth-child(1) > a').contains('Forms')

		cy.get('a.btn').contains('Create form')

		cy.wait(1000)

		cy.get('tbody > tr > :nth-child(1)').contains('default')
		  .click()

		cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .bootstrap-switch > .bootstrap-switch-container > .bootstrap-switch-label').click()

		cy.get('.in > .form-control').type('0')

		cy.get(':nth-child(1) > .pull-right > .btn').click()

		cy.wait(1000)


	})

})