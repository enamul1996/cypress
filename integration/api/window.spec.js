const { expect } = require("chai")
const { it } = require("mocha")

describe('validate the window based elements',()=>{
    it('validate the title for html elements',()=>{
        cy.visit('https://plctools.com/ethernet-devices/')
        cy.titles().should('have.text','Ethernet Devices-PLC Tools')
        cy.titles().should('eq','Ethernet Devices-PLC Tools')
        cy.log(cy.titles())
        expect(cy.titles().chainerId).includes("chainer")
    })
    it('reload the page',()=>{
        cy.visit('https://plctools.com/ethernet-devices/')
        cy.contains(/^Analog Simulators$/).click({force:true})
        cy.url().should('include',"analog")
        cy.go('back')
        cy.go('forward')
    })

    it.only('invoke command',()=>{
        cy.visit('https://plctools.com/')
        cy.get('h2[class="page-heading"]').eq(0).should('have.text','Featured Products')
        cy.get('h2[class="page-heading"]').eq(0).invoke('text').then(function (el)
        {
            expect(el).to.equals('Featured Products')
        })
        cy.get('h2[class="page-heading"]').eq(0).invoke('remoteAttr','class').should('not.have.class','page-heading')
        })
        cy.get('#new').should('have,text','apple')

        cy.get('#new').invoke('text').then(function(el)
        {
           expect(el).to.equals('apple')
        })

    })
