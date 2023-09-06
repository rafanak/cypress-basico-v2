it('Testa a página de política de privacidade de forma independente', function(){
    cy.visit('./src/privacy.html')

    cy.contains('Política de privacidade').should('be.visible')
})