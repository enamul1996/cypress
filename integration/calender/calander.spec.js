
describe('automate calender',()=>
{
    it('validate the datepicker',()=>
    {
        let d = new Date()
        cy.log(d.getDate())
        cy.log(d.getFullYear())
        cy.log(d.toLocaleString('default',{month:'long'}))
        cy.log(d.getMonth())

    })
    it.only('validate the datepicker',()=>
    {
        cy.visit('http://webdriveruniversity.com/Datepicker/index.html')
        let dt = new Date()
        dt.setDate(dt.getDate() + 200)
        let year = dt.getFullYear()
        let month = dt.toLocaleString('default',{month:'long'})
        let futuredate = dt.getDate()
        cy.log(year)
        cy.log(month)

        function selectMonthandYear()
        {
            cy.get('#datepicker').click()

            cy.get('.datepicker-switch').first().then((el) =>
            {
                if(!el.text().include(year))
                {
                    cy.get('.next').first().click().selectMonthandYear()
                }
            }).then(()=>
            {
               cy.get('.datepicker-switch').first().then((el) =>
               {
                if(!el.text().include(month))
                {
                    cy.get('.next').first().click().selectMonthandYear()
                }
               })   
            })
        }

        function selectdate()
        {
            cy.get('.day').contains(futuredate).click()
            return true
        }
        selectMonthandYear()
        selectdate()
    })
})