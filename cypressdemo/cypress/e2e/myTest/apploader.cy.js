it("example load",()=>{
    cy.visit("http://localhost:3000")
})
it("initial value , increment , decrement",()=>{
    cy.get("h3").should('have.text',0)
    cy.contains("+").click()
    cy.contains("+").click()
    cy.contains("+").click()
    cy.contains("+").click()
    cy.contains("+").click()
    cy.get("h3").should('have.text',5)
})