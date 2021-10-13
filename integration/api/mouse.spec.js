


describe('Actions class',()=>
{
    it('scroll into view',()=>
    {
       cy.visit('https://docs.cypress.io/guides/overview/why-cypress#Our-mission')
       cy.get('footer').scrollIntoView()
    })

    it('Drag and Drop',()=>
    {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable > p').then((el)=>
        {
            expect(el).to.have.css('background-color: rgb(244, 89, 80)')
        })
    })

    // FLIPKART DRAGDOWN

    it.only('validate the mouseover dropdown',()=>
    {
        cy.visit('https://www.flipkart.com/')
        cy.get('.exehdJ').trigger('mouseover')
        cy.get('.pO9syL').find('li').find('a')
        .find('div').each((el)=>
        {
            if(el.text() === 'Sell on Flipkart')
            {
                cy.log(el.text())
                el.click()
            }
        })
        cy.url().should('eq','https://seller.flipkart.com/sell-online/?utm_source=flipkart&utm_medium=website&utm_campaign=sellbutton')
        cy.get('.link-color').first().should('have.attr','href')
    })
})