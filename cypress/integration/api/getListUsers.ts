describe('listUsers', () => { 

    it('GET-list users', () => {
        cy.request('GET','https://reqres.in/api/users?page=2/').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal('Michael')
        })
    })

    it('GET-list users', () => {
        cy.request('GET','https://reqres.in/api/users?page=1/').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal('Michael')
        })
    })

    it('GET-list users', () => {
        cy.request('GET','https://reqres.in/api/users?page=1/').then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.data[0].first_name).equal('Michael')
        })
    })

    it('GET-list users', () => {
        cy.request('GET','https://reqres.in/api').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal('Michael')
        })
    })
})