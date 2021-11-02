describe("Verify Checkboxes via WebDriverUni", () => {
    beforeEach(() => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force: true})
    })
    it("Verify One Checkbox", () => {
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')

        cy.get('@option-1').check().should('be.checked')
        cy.get('@option-1').uncheck().should('not.be.checked')

    })

    it("Verify Multiple Checkboxes", () => {
        const checkboxes = ['option-1', 'option-2', 'option-3', 'option-4']

        cy.get('input[type="checkbox"]').as('listCheckboxes')

        cy.get('@listCheckboxes').check(checkboxes).should('be.checked')

        cy.get('@listCheckboxes').uncheck(checkboxes).should('not.be.checked')
    })

    it("Verify Radio Buttons", () => {
        cy.get('#radio-buttons').find('[type="radio"]').as('radioButtons')

        cy.get('@radioButtons').first().click().should('be.checked')
        cy.get('@radioButtons').eq(1).click().should('be.checked')
    })

    it('Validate The State Of Specific Radio Buttons', () => {
        cy.get('[value="lettuce"]').should("not.be.checked")
        cy.get('[value="pumpkin"]').should("be.checked")
        cy.get('[value="cabbage"]').should("be.disabled")

        cy.get('[value="lettuce"]').check().should('be.checked')
        cy.get('[value="pumpkin"]').should("not.be.checked")
        cy.get('[value="cabbage"]').should("be.disabled")
    })

    it.only('Handling Drop-Down', () => {
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('Maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')
    })
})