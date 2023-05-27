///<reference types="cypress" />

describe('Testes para a agenda de contatos',()=>{
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um contato na agenda', ()=>{
        cy.get('input[type=text]').type('Fernando Viana')
        cy.get('input[type=email]').type('fernandoviana@ebac.com.br')
        cy.get('input[type=tel]').type('9292779859')
        cy.get('.adicionar').click()
      
    })

    it('Deve editar um contato na agenda', () => {
        cy.get('.edit').eq(0).click()
        cy.get('input[type=text]').clear().type('Gian Souza')
        cy.get('input[type=email]').clear().type('giansouza@ebac.com')
        cy.get('input[type=tel]').clear().type('11 985693211')
        cy.get('.alterar').click()
    })

    it('Deve remover um contato na agenda', () => {
        cy.get('.delete').eq(1).click()
    })
})