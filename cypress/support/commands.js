Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Rafaela')
    cy.get('#lastName').type('Naka')
    cy.get('#email').type('email@email.com')
    cy.get('#open-text-area').type('Lorem Ipsum')
    cy.get('button[type="submit"]').click()
}) //hardcoded