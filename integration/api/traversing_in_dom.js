

describe("traversing the dom in cypress",()=>{
    it("childern() to get the children element of the dom ",()=>{
        cy.visit("https://recast.studio/")
        cy.get('ul[id="menu-1-b0137a3"]').children().should('have.length','4')
        cy.get('ul[id="menu-1-b0137a3"]').children("li").eq(0).children().should("have.text",'Home')

    })

//     it("closest() to validate the closest parent of the element",()=>{
//         cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
//         cy.get('#coffee').closest('ul').should('have.class','traversal-drinks-list')
//     })

//     it("eq() to retrive the specific element in the list base on index",()=>{
//         cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
//         cy.get('.traversal-drinks-list').children().eq(3).should('contain','Espresso')

//     })

//     it("last() to retrive the last element in the list",()=>{
//         cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
//         cy.get('.traversal-drinks-list').children().last().should('contain','Sugar')
//     })

//     it.only("first() to retrive the first element in the list",()=>{
//         cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
//         cy.get('.traversal-drinks-list').children().first().should('contain','Coffee')



//     })


})