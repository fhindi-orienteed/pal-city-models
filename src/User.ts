// src/User.ts
export class User {
    constructor(public name: string, public email: string) { }

    isValid(): boolean {
        return this.name.length > 0;
    }
}