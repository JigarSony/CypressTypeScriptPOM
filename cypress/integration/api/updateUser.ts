describe('updateUser', () => {

    it('PUT-Update user', () => {
        var user = {
            "name": "morpheus",
            "job": "zion resident"
            }
        cy.request('PUT','https://reqres.in/api/users/2',user).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).equal('morpheus')
            expect(response.body.job).equal('zion resident')
        })
    })

    it('PUT-Update user', () => {
        var user = {
            "name": "",
            "job": ""
            }
        cy.request('PUT','https://reqres.in/api/users/2',user).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).equal('morpheus')
            expect(response.body.job).equal('zion resident')
        })
    })

    it('PUT-Update user', () => {
        var user = {
            "name": 1,
            "job": 2
            }
        cy.request('PUT','https://reqres.in/api/users/2',user).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).equal('morpheus')
            expect(response.body.job).equal('zion resident')
        })
    })
})