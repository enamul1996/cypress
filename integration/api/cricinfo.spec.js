// describe('Iterate over the element',()=>{
//     it('verify the total score',()=>{

//  cy.visit('https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-2nd-test-1239544/full-scorecard')

//  let sum = 0
//  let extras = 0
//  let total = 0
//  cy.get('.batsman').first().find('td[class="font-weight-bold"]').each((el,index,arr)=>{
//      //cy.log(el.text())
//      sum = sum + Number(el.text())
//  }).then(()=>{
//      cy.log(sum)
//      cy.get('.batsman').first().find('tr[class="extras"]').children().eq(2).then((el)=>{
//          extras = Number(el.text())
//          cy.get('.batsman').first().find('tfoot').find('td[class="text-right font-weight-bold"]')
//          .then((el)=>{
//              total = Number(el.text())
//              expect(total).to.eqls(sum+extras)
//          })
//  })
//  })
  

// cy.visit('https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-2nd-test-1239544/full-scorecard')

// let Pfifty = 0
// cy.get('.batsman').first().find('td[class="font-weight-bold"]').each((el,index,arr)=>{
//     cy.log(el.text())
//     for( i = 0 ; i < 12 ; i++) {
//     if (Number(el.text()) > 50 )
//     return ( pfifty + 1 )
//     }
//     cy.log(pfifty)
// })
// })
// })