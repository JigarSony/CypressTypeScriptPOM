export class loginPage {

     elements() {
                username: cy.get("#user-name")
            //     '' => 'input[name="password"]',
            //     '@login' => 'button[type="submit"]',
            // ];
      }

    addUsername(value: string) {
        cy.get("#user-name").clear().type(value);
        return this;
    }

    addPassword(value: string) {
        cy.get("#password").clear().type(value);
        return this;
    }

    clickLogin() {
        cy.get("#login-button").click();
        return this;
    }
}
export interface loginPage{}