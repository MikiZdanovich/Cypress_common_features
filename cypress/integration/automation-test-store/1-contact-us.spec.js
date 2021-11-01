describe("Test Contact Us form via Automation Test Store", () => {

    beforeEach(() => {
        cy.visit("https://www.automationteststore.com/")
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.xpath("//a[contains(text(),'Contact Us')]").click().then((contactUsBtn) => {
            cy.get('.maintext').should('contain.text', contactUsBtn.text())
        })
        cy.get('#ContactUsFrm_first_name').type('Miki')
        cy.get('#ContactUsFrm_email').type('Miki@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('blahblahblah')
        cy.get("button[title='Submit']").click()

        cy.contains('Your enquiry has been successfully sent to the store owner!')
        cy.get('[class="btn btn-default mr10"]').click()

    })
})
