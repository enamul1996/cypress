describe('traversing method in cypress',()=>{
// // first method
//     it('children() to get the children of the DOM element',()=>{
//         cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
//         cy.get('.traversal-breadcrumb').children('.active').should('have.text','Contact Us')
//     })
// // second method
//     it('first() to retrive the first Element in the HTMLElement list',()=>{
//         cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
//         cy.get('.traversal-breadcrumb').children().first().should('have.text','Home')
//     })
// // third method
//     it('last() to retrive the last Element in the HTMLElement list',()=>{
//         cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
//         cy.get('.traversal-breadcrumb').children().last().should('have.text','Contact Us')
//     })
// // forth method
//     it('eq() to retrive the Element in the HTMLElement by index',()=>{
//         cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
//         cy.get('.traversal-breadcrumb').children().eq(1).should('have.text','About Us')
//     })
// // fifth method
    // it('parent() to retrive the parent of current Element in the HTMLElement',()=>{
    //     cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
    //     cy.contains('Andy').parent().last().should('have.class','bg-info')
    // })
// // sixth method
//     it('next() to retrive the next sibling of HTMLElement',()=>{
//         cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
//         cy.get('.bg-info').children().eq(0).next().should('have.text','Andy')
//     })
// // seventh method
//     it('prev() to retrive the previuse sibling of HTMLElement',()=>{
//         cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
//         cy.get('.bg-info').children().eq(2).prev().should('have.text','Andy')
//     })
// // eighth method
//     it('closet() to get the closet ancestor of HTMLElement',()=>{
//         cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
//         cy.contains('Firstname').closest('table').should('have.attr','id','t01')
//     })    
// // ninth method
//     it('find() to get the descendent of DOM Element',()=>{
//         cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
//         cy.get('.traversal-pagination').find('li').find('a').should('have.length','7')
//     }) 
// // tenth method
//     it('nextAll() to find next sibling DOM element from the current Element',()=>{
//         cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
//         cy.contains('Apple').nextAll().should('have.length','9')
//     }) 
// // elevenh method
//     it('nextUntil() to find next sibling to a particular sibling Element',()=>{
//         cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
//         cy.contains('Apple').nextUntil('#veggie').should('have.length','4')
//     }) 
// // twelth method 
//     it('not() to remove a particular set of Element',()=>{
//         cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
//         cy.get('.btn').not('.disabled').should('have.length','12')
//     }) 
// //thirteenth method 
//     it('sibling() to get all the sibling for particular',()=>{
//         cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
//         cy.get('#coffee').siblings().should('have.length','4')
//     })
// //fortheenth method 
    // it('filter() to basically filter out particular element',()=>{
    //     cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
    //     cy.get('.traversal-breadcrumb').filter('.active').should('have.text',"Contact Us")
    // })
//fifteenth method
    it('parents() to get particular or validate a particular element',()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-marked-text').parent().should('have.text','Lorem ipsum dolor sit amet, consectetur adipiscing elit, ')
    })
    
})