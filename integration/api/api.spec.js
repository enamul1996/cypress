// what to test??
// how to test case??


describe('Verify api functionality',()=>{
    it('verify the get api',()=>{
        cy.request({
            method:"GET",
            url : "https://reqres.in/api/users?page=2"
        }).then((response)=>{
            expect(response.status).to.eql(200)
            // duration
            // body
            // headers
            // status

        }).catch(()=>{
            console.log('Request not')
        })
    })

    it('verify the post request',()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
             body:{
                 name:"morpheus",
                 job:"leader"
             }
        }).then((response)=>{
            expect(response.status).to.eqls(201)
        })
    })

    it('verify the put request',()=>{
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/user/2",
            body:{
                name: "morpheus",
                job: "zion resident"
            }
        }).then((reponse)=>{
            expect(response.status).to.eqls(200)
        })
    })

    it('verify the put request',()=>{
        cy.request({
            method:"DELETE"
        })
    })
})