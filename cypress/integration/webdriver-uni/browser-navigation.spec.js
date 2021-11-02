describe("Validate webdriveruni homepage links ", () => {
    beforeEach(() => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force: true})
    })

    it.only("Confirm links redirect to the correct page", () => {
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.url().should('not.include', 'contactus')
        cy.go('forward')
        cy.reload()
        cy.go('back')
        // cy.reload(true) // reload without using cash

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', 'To-Do-List')

    });

})