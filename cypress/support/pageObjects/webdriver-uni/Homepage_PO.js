class Homepage_PO {
    static visitHomePage() {
        cy.visit(Cypress.env('webdriveruni_homepage'))
    }

    static clickOn_ContactUs_Button() {
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force: true})
    }
}

export default Homepage_PO