 describe('drop down testcases', () => {


    // it('valide the functionality of astcbus drop down', () => {
    //     cy.visit('https://astcbus.in/')
//         cy.get('#fromPlaceName').type('sil')
//         cy.get('#fromPlaceName').type('{downarrow}{enter}')

 //   })


//         })

//     })

    // it.only('valide the functionality of spicejet drop down',()=>{
    //     cy.visit('https://www.spicejet.com/')
    //      cy.get('#ctl00_mainContent_DropDownListCurrency').select('EUR')
    //  })

    // Select
    // it('valide the functionality of academy drop down', () => {
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //     cy.get('#dropdown-class-example').select('Option2')
    // })

     // Auto-suggestion

    // it('valide the functionality of google drop down', () => {
    //     cy.visit('www.google.com')
    //     cy.get('input[name="q"]').type('python ')
    //     cy.get('.erkvQe').find('li').each(function (el) {
    //         cy.log(el.text())
    //         if (el.text().includes('tutorial')) {
    //             el.click()
    //         }
    //     })

    //      cy.url().should('include','tutorial')
    //  })
     it('valide the functionality of google drop down', () => {
        cy.visit('www.google.com')
        cy.get('input[name="q"]').type('cypress ')
        cy.get('.erkvQe').find('li').each(function (el) {
            cy.log(el.text())
            if (el.text().includes('testing')) {
                el.click()
            }
         })
    })





//     // Auto-suggestion

//     it('valide the functionality of redbus drop down', () => {
//         cy.visit('https://www.oyorooms.com/')
//         cy.get('#autoComplete__home').type('pune')
//         cy.get('.geoSuggestionsList__container').find('div').each(function (el) {
//             if (el.text().includes('Shivaji')) {
//                 el.click()
//             }
//         })

//     })
    // it('valide the functionality of oyorooms drop down', () => {
    //     cy.visit('https://www.oyorooms.com/')
    //     cy.get('#autoComplete__home').type('mumbai')
    //     cy.get('.geoSuggestionsList__container').find('div').then(function (ela) {
    //         Array.from(ela).forEach(function (el) {
    //             if (el.textContent.includes('thane')) {
    //                 el.click()

                


    //             }
    //             })
    //         })
    //     })

        })