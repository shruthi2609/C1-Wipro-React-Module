describe("test suite for checking api's",()=>{
it("get request",()=>{
    cy.request("https://jsonplaceholder.typicode.com/users").should((res)=>{
       expect(res).to.have.property("body")
       expect(res.body).to.have.length(10)
       expect(res.status).to.eq(200)
    })
})

it("negative test case",()=>{
    cy.request("https://jonplaceholder.typicode.com/users")
})

})