describe('deleteUser', () => {

    it('DELETE-Delete user', () => {
        cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
            expect(response.status).equal(204)
        })
    })

    it('DELETE-Delete user', () => {
        cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
            expect(response.status).equal(200)
        })
    })
})