describe("Test mouse actions", () => {
    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get("#actions").invoke('removeAttr', 'target').click({force: true})
    })

    it('I should be able to drag and drop draggable item', () => {
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})

    })

    it('I should be able to perform double click', () => {
        cy.get('#double-click').trigger('dblclick')

    })

    it('I should be able to hold down the left mouse button on a given item', () => {
        cy.get('#click-box').trigger('mousedown', {which: 1}).then((element) => {
            expect(element).to.have.css('background-color', 'rgb(0, 255, 0)')

        })
    })

    it.skip('I should be able to hover mouse above the element', () => {
        cy.get('#div-hover > *').as('hover')
        cy.get('@hover').first().trigger('mousemove')
    })
})