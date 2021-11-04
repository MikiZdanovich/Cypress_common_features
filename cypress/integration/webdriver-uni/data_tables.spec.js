describe("Handling Data Tables", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({force: true});
    });

    it("Calculate and assert the total age of users base on position in table", () => {
        let userDetails = []
        cy.get('#thumbnail-1 td').each(((element, index, $list) => {
            userDetails[index] = element.text()
        }))
            .then(() => {
                    let sum = 0
                    let i
                    for (i = 0; i < userDetails.length; i++) {
                        if (Number(userDetails[i])) {
                            sum += Number(userDetails[i])
                        }
                    }
                    expect(sum).to.equal(322)
                }
            )
    });

    it('Validate age of users base on Second Name', () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').as('secondNames')
                                                 .each(((element, index, $list) => {
            const text = element.text()
            if (text.includes('Woods')) {
                cy.get('@secondNames').eq(index).next()
                    .then((age) =>{
                    const userAge = age.text()
                    expect(userAge).to.equal("80")
                })
            }
        }))
    })

})

