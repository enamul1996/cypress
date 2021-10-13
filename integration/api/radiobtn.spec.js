
describe('check the funtionality',()=>
{
    it('verify the funtionality for Roundtrip radio button',()=>
    {
       cy.visit('https://www.spicejet.com/')
       cy.get('input[value = "RoundTrip"]').as('roundTrip')
       cy.get('@roundTrip').first().check()
       cy.get('@roundTrip').should('be.checked')
 
    })

    it('verify the radio button is disabled or not',()=>
    {
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="pumpkin"]').should('not.be.disabled')
    })

    it('Validate the single checkbox',()=>
    {
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value = "option-1"]').as('option-1')
        cy.get('@option-1').check()
        cy.get('@option-1').should('be.checked')
    
    })

    it.only('Vallidate the multiple checkbox',()=>
    {
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#checkboxes').find('input').check(['option-1' , 'option-2' , 'option-3' , 'option-4'])
    })
})  