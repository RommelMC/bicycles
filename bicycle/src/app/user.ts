export class User {
    constructor(
        public firstName: string = "",
        public lastName: string = "",
        public email: string = "",
        public password: string = "",
        public passwordConfirmation: string = ""
    ){}

    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
        };
    }
}
