describe('Sistema de busca do Google', () => {
    it('E acessa a pagina do Google', () => {
      cy.visit('https://www.google.com')
    })
    it('E digita algo no campo de busca', () =>{
      cy.get('input[name=q]').type('Ana Parra YouTube')
    }) 
    it('E realiza a busca', () =>{
      cy.get('form').submit({})
    }) 
    it('E verifica a primeira opcao', () =>{
      cy.get('h3').should('include.text', 'Ana Parra')
    }) 
    it('Então acessa o canal do youtube', () => {
        cy.visit('  http://youtube.com/AnaParra')
      })
    
  })