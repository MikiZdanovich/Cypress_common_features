describe("Verify variables, cy commands, jQuery commands", () => {
    beforeEach(() => {
        cy.visit("https://www.automationteststore.com/")
    })
    
    it("Cy way to get elements", () => {
        cy.get('#categorymenu').contains('Skincare').click()
        cy.get('#categorymenu').contains('Makeup').click()
    })

    it("Navigating to specific product page", () => {
        cy.get('#categorymenu').then(($navMenu) => {
            cy.wrap($navMenu).contains('Makeup').click().then(() => {
                cy.get("h1 .maintext").then(($headerText) => {
                    const headerText = $headerText.text()
                    expect(headerText).is.eq('Makeup')
                })
            })
        })

    })
})

describe("Verify variables, cy commands, jQuery commands with different beforeEach", () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
    })

    it('Check properties of the contact us page', () => {
        //cypress commands and chains
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(form => {
            const firstNameText = form.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
            })

            const second = form.find('#field_12').text()
            expect(second).to.contain('Email')
        })
    })
})
