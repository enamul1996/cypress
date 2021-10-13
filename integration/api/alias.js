describe('alias and invoke',()=>
{
    it('Validate the specific product',()=>
    {
        cy.visit('https://automationteststore.com/')
        
        cy.get('.prdocutname').first().should('have.text','Skinsheen Bronzer Stick')
        cy.get('.prdocutname').first().then((el)=>
        {
            expect(el.text().length).to.equals(23)
        })
    })   
    
    it('Validate text the specific product',()=>
    {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').first().invoke('text').as('text') 
        cy.get('@text').should('have.length',23)
        cy.get('@text').should('include','Skinsheen Bronzer Stick')
    })

    it('Validate text the specific product',()=>
    {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').first().as('ele')
        cy.get('@ele').should('have.attr','title')
        cy.get('@ele').should('have.text','Skinsheen Bronzer Stick')  
        cy.get('@ele').should('have.attr','class','prdocutname')
    })

})