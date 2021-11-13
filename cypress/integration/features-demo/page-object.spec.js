import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";

describe("Test Contact Us form via WebdriverUni with PO implemented", () => {
    before(function () {
        cy.fixture('example.json').as('user')
    })

    beforeEach(() => {
        const homepage = Homepage_PO
        homepage.visitHomePage()
        homepage.clickOn_ContactUs_Button()
    })
    it.only("Should be able to submit a successful submission", () => {
        const contact_Us_Page = Contact_Us_PO

        cy.get('@user').then((user) => {
            contact_Us_Page.contactForm_Submission(user.first_name, user.last_name, user.email,
                'Learn Cypress', 'h1', 'Thank You')
        })

    });
})