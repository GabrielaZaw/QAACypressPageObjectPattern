export class LogOut {
    findLogoutButton() {
        cy.get("#open-navigation-menu-mobile").click();
        cy.contains("Log out").click();
    }
}
