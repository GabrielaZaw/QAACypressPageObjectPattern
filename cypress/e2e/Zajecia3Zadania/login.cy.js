import { Login } from "../../Pages/Login.js";
import { LogOut } from "../../Pages/HomePage.js";

const loginPage = new Login();
const homePage = new LogOut();

describe("Testowanie logowania przy użyciu POP", () => {
    it("Login i logout przy użyciu emaila user888@gmail.com", () => {
        loginPage.navigate();
        loginPage.typeLoginAndPassword("user888@gmail.com", "1234567890");
        loginPage.clickingSubmitButton();
        homePage.findLogoutButton();
    });
});

describe("Testowanie nr2 logowania przy użyciu POP", () => {
    it("Login i logout przy użyciu emaila testowyqa.team", () => {
        loginPage.navigate();
        loginPage.typeLoginAndPassword("testowyqa@qa.team", "QA!automation-1");
        loginPage.clickingSubmitButton();
        homePage.findLogoutButton();
    });
});
