// src/User.ts
export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    isValid() {
        return this.name.length > 0;
    }
}
