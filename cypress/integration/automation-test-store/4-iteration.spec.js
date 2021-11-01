describe("Iterate through list items", () => {
    beforeEach(() => {
        cy.visit("https://www.automationteststore.com/")
    })
    it('Check items on Hair Care Page ', () => {
        cy.get('#categorymenu').contains('Hair Care').click()

        cy.get(".fixed_wrapper .prdocutname").each( ($el, index, $list) => {
            if($el.text().includes("straight Shampoo")) {
                cy.wrap($el).click().then(() => {
                    cy.get('.bgnone').should('contain', 'Curls to straight Shampoo')
                })
            }
        })
    })
})