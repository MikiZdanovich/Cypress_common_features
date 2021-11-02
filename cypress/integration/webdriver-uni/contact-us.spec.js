describe("Test Contact Us form via WebdriverUni", () => {
    beforeEach(() => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force: true})
    })
    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.url().should('include', 'contactus')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver')
        cy.get('[name="first_name"]').type("Miki")
        cy.get('[name="last_name"]').type('Huiki')
        cy.get('[name="email"]').should('have.attr', 'name', 'email').type('MikiHuiki@gmail.com')
        cy.get('textarea.feedback-input').type('blahblahblah')
        cy.get('[type="submit"]').click()
        cy.contains('Thank You for your Message!').should('be.visible')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.get('[name="first_name"]').type("Miki")
        cy.get('[name="last_name"]').type('Huiki')
        cy.get('textarea.feedback-input').type('blahblahblah')
        cy.get('[type="submit"]').click()
        cy.contains('Error: all fields are required')
        cy.contains('Error: Invalid email address')
    });
})