describe("Verify Autocompletion dropdown lists via webdriver uni", () => {
    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get("#autocomplete-textfield").invoke('removeAttr', 'target').click({force: true})
    })
    it.only("Select specific product via autocomplete list", () => {
        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list > *').each((element, index, $list) => {
            const prod = element.text()
            const productToSelect = 'Apple'

            if (prod === productToSelect) {
                element.trigger("click")

                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        })

            .then(() => {
                cy.get('#myInput').type('G')

                cy.get('#myInputautocomplete-list > *').each((element, index, $list) => {
                    const prod = element.text()
                    const productToSelect = 'Grapes'

                    if (prod === productToSelect) {
                        element.trigger("click")

                        cy.get('#submit-button').click()
                        cy.url().should('include', productToSelect)
                    }
                })
            })
    })
})