describe("Iterate and invoke", () => {
    beforeEach(() => {
        cy.visit("https://www.automationteststore.com/")

    })
    it('Validate a specific hair care product', () => {
        cy.get('#categorymenu').contains('Hair Care').click()
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    })

    it('Validate count of elements on the page', () => {
        cy.get('.thumbnail').as('thumbnail')
        cy.get('@thumbnail').should('have.length', 16)
        cy.get('@thumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it('Calculate normal and sale product', () => {
        cy.get('.thumbnail').as('thumbnail')
        cy.get('@thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        let itemsTotalPrices = 0;

        cy.get('@itemPrice').then($linkText => {
            let itemPriceTotal = 0
            const itemPrice = $linkText.split('$')
            itemPrice.forEach($el => {
                itemPriceTotal += +$el
            })
            itemsTotalPrices += itemPriceTotal
        })

        cy.get('@saleItemPrice').then($linkText => {
            let itemSalePriceTotal = 0
            const itemPrice = $linkText.split('$')
            itemPrice.forEach($el => {
                itemSalePriceTotal += +$el
            })

            itemsTotalPrices += itemSalePriceTotal
        })

            .then(() => {
                cy.log(itemsTotalPrices)
                expect(itemsTotalPrices).to.equal(654.1)
            })
    })
})