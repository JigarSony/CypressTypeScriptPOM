describe('createUser', () => {

    it('POST-Create user', () => {
        var user = {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal('morpheus')
            expect(response.body.job).equal('leader')
        })
    })

    it('POST-Create user', () => {
        var user = {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).equal('morpheus')
            expect(response.body.job).equal('leader')
        })
    })

    it('POST-Create user', () => {
        var user = {
            "name": "",
            "job": "leader"
        }
        cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).equal('morpheus')
            expect(response.body.job).equal('leader')
        })
    })

    it('POST-Create user', () => {
        var user = {
            "name": "morpheus",
            "job": ""
        }
        cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal('morpheus')
            expect(response.body.job).equal('leader')
        })
    })

    it('POST-Create user', () => {
        var user = {
            "name": 1,
            "job": "leader"
        }
        cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal('morpheus')
            expect(response.body.job).equal('leader')
        })
    })

    it('POST-Create user', () => {
        var user = {
            "name": "morpheus",
            "job": 1
        }
        cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal('morpheus')
            expect(response.body.job).equal('leader')
        })
    })
})