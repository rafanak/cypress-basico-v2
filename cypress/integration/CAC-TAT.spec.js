/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    //beforeEach como pré-condição
    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('Verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    
    it('Preenche os campos obrigatórios e envia o formulário', function(){
        const longText = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
        cy.get('#firstName').type('Rafaela')  //o # é o id, . é classe
        cy.get('#lastName').type('Naka')
        cy.get('#email').type('email@email.com')
        cy.get('#open-text-area').type(longText, { delay : 0})
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('Mensagem de erro para e-mail enviado com formatação incorreta', function(){
        cy.get('#firstName').type('Rafaela')  //o # é o id, . é classe
        cy.get('#lastName').type('Naka')
        cy.get('#email').type('email@email,com')
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('Campo de telefone continua vazio para valor não numérico', function(){
        cy.get('#phone')
          .type('asdasdasd')
          .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Rafaela')  //o # é o id, . é classe
        cy.get('#lastName').type('Naka')
        cy.get('#email').type('email@email.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName')
          .type('Rafaela')
          .should('have.value', 'Rafaela')
          .clear()
          .should('have.value', '')
        cy.get('#lastName')
          .type('Nakashima')
          .should('have.value', 'Nakashima')
          .clear()
          .should('have.value', '')   
        cy.get('#email')
          .type('teste@teste.com')
          .should('have.value', 'teste@teste.com')
          .clear()
          .should('have.value', '') 
        cy.get('#phone')  
          .type('1234567890')
          .should('have.value', '1234567890')
          .clear()
          .should('have.value', '')
        cy.get('#open-text-area')
          .type('teste')
          .should('have.value', 'teste')
          .clear()
          .should('have.value', '')
    })


    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('envia o formulário com sucesso com um comando customizado', function(){
      cy.fillMandatoryFieldsAndSubmit()

      cy.get('.success').should('be.visible')
    })

    it('Seleciona um produto (Youtube) por seu texto', function(){
      cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')
    })
  })
  