describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})

describe('Inicio de sesión', () => {
  it('Inicia sesión correctamente', () => {
    // Visitamos la página de inicio de sesión
    cy.visit('/login');

    // Rellenamos el formulario de inicio de sesión con un usuario y contraseña válido
    cy.get('#username').type('Marian');
    cy.get('#password').type('12345678');
    cy.get('form').submit();
    cy.get('#welcome-message').should('contain', 'Bienvenid@');

    // Comprobamos que se ha iniciado sesión correctamente
    cy.wait(5000); // espera 5 segundos
    cy.get('.btnAzul').click();
cy.url().should('include', '/map');

  });
});

describe("Discovery component", () => {
  it("Displays data correctly", () => {
    cy.visit("http://localhost:3000/discovery");
    cy.get(".cosa").should("have.length", 19); // Replace 4 with the number of insects in the API response
  });

  // it("Allows the user to like an insect", () => {
  //   cy.visit("http://localhost:3000/discovery");
  //   cy.get(".ojo").first().click();
  //   cy.get(".ojo").first().should("have.class", "active");
  // });

  // it("Sends data when the user selects and submits insects", () => {
  //   cy.visit("http://localhost:3000/discovery");
  //   cy.get(".ojo").first().click();
  //   cy.get(".btnb").click();
  //   cy.get(".success-icon").should("be.visible");
  // });
});


