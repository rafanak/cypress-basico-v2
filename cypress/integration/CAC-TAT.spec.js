/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    //beforeEach como pré-condição
    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    
    it.only('Preenche os campos obrigatórios e envia o formulário', function(){
        const longText = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
        cy.get('#firstName').type('Rafaela')  //o # é o id, . é classe
        cy.get('#lastName').type('Naka')
        cy.get('#email').type('email@email.com')
        cy.get('#open-text-area').type(longText, { delay : 0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
  })
  