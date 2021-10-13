


describe('verify the environment',()=>{
    it('verify the production url',()=>{

        cy.visit('/auth/register/')
    })

    //https://app.recast.studio//auth/login/

    it.only('verify the production url',()=>{
        let url = cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url+'/auth/login/'); //passing url value to cy.visit()
    })
})