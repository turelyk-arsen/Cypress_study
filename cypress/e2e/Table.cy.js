describe("Handle Table", () => {
  beforeEach("Login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get('#input-username').type('demo')
    cy.get('#input-password').type('demo')
    cy.get('.btn').click()
    cy.get('.btn-close').click()
    cy.get('#menu-customer > .parent').click()
    cy.get('#collapse-5 > :nth-child(1) > a').click()
  });

  it('Check number row and columns', () => {
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length', '10')
    cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length', '7')
  })

  it('check all the row and columns data in the first page', () => {
    cy.get(':nth-child(5) > :nth-child(3)').contains('demo234566@gmail.com')
  })

  it('read all the rows and columns data in the first page', () => {
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
    .each(($row, index, $rows)=> {
        cy.wrap($row).within(()=>{
            cy.get('td>').each(($col, index, $cols) => {
                cy.log($col.text())
            })
        })
    })
  })

  it.only('pagination', ()=> {

    // find total number of pages
    // let totalPages;
    // cy.get('.row > .text-end').then((e)=> {
    //     let mytext = e.text();
    //     let totalPages = mytext.substring(mytext.indexOf('(')+1, mytext.indexOf('Pages')-1)
    //     cy.log("Total number of pages in a table ==>" + totalPages)
    // })

    let totalPages = 5;
    for(let p=1; p <= totalPages; p++) {
        if (totalPages > 1){
            cy.log("Active page is " + p)
            cy.get(':nth-child('+p+') > .page-link').click()
            cy.wait(3000)
            cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
            .each(($row, index, $rows) => {
                cy.wrap($row).within(()=> {
                    cy.get('td:nth-child(3)').then((e)=> {
                        cy.log(e.text()) 
                    })
                })
            })
        }
    }


  })
});
