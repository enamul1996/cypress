
describe('Action class...',()=>{
    let hello = "https://www.google.com"

    it('Scroll into view',()=>{
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('remoteAttr','target').click()
        cy.url().should('contain',"Contact-Us")
        cy.title().should('have.text','WebDriver | Contact Us')
    })

    it('Scroll into view',()=>{
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#contact_us').invoke('attr','href').then(function(el){
            cy.visit('/${el}')
        })
    })

    it('Scroll into view',()=>{
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#contact-us').then(function($input){
            $input[0].setAttribute('target','_self')
        })
        .should('have.attr','target','_self')
        cy.get('#contact_us').click()
    })

    it.only('Scroll Into view',()=>{
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#contact_us').then(function($input){
            $input[0].setAttribute('href',"https://www.google.com")
        })
        cy.get('#contact_us').invoke('removeAttr','target').click()
        cy.get('#contact-us').invoke('attr','href').then(function(el){
            expect(el).to.equals(hello)
        })
    })

    it.only('scroll Into view',()=>{
        cy.visit(hello)
    })
})