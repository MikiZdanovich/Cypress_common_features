describe("Test Contact Us form via WebdriverUni", () => {
    beforeEach(() => {
        cy.visit("https://www.automationteststore.com/")
    })

    it("Click on the first item using item header", () =>{
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    })

    it('Click on the first item using item text', () => {
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then((itemHeader) => {
            cy.get('.bgnone').should('have.text', itemHeader.text())
        })

    })

    it('Click on the first item using index', () => {
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
        cy.get('.cart').should('exist')

    })

})