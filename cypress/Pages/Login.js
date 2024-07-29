export class Login {
    // Przejście na stronę logowania
    navigate() {
        cy.visit("https://www.edu.goit.global/account/login");
    }

    // uzupełnienie inputów Login i hasło
    typeLoginAndPassword(email, password) {
        cy.get("#user_email").type(email);
        cy.get("#user_password").type(password);
    }

    // Klikniecie Submit
    clickingSubmitButton() {
        cy.get("[type=submit]").click();
    }
}
