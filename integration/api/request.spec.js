describe('verify all the api', () => {
    it.only('validate the get', () => {
        cy.request({
            method: 'GET',
            // query parameter
            url: 'https://reqres.in/api/users?page=2'
        }).then(function (response) {
            expect(response.status).to.equal(200)
            expect(response.body.data.length).to.equal(6)
            expect(response.body.data[0].id).to.equal(7)
            expect(response.body.support.text).to.contain('appreciated!')
            expect(response.body).to.have.property("support")
            expect(response.body).to.include.all.keys('data','support',"page","total_pages","total","per_page")


        })

    })

    it('validate the post request',()=>{
        cy.request({
            method:'POST',
            url:"https://reqres.in/api/users",
            body:{
                "name": "chinmay",
                "job": "deshpande"
            }
        }).then(function(response){
            // status body duration headers

            expect(response.status).to.equal(201)
            // expect(response.body)
            // expect(response.duration)
            // expect(response.headers)


        })
    })


    // PUT and Patch (subset of post request)

    it('validate the put request',()=>{
        cy.request({
            method:'PUT',
            // path parameter
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "chinmay",
                "job": "deshpande"
            }
        }).then(function(response){
            expect(response.status).to.equal(200)

        })
    })

    it('validate the request',()=>{
        cy.request({
            method:'DELETE',
            // path parameter
            url:"https://reqres.in/api/users/2",

        }).then(function(response){
            expect(response.status).to.equal(204)

        })
    })







})