export class User {
    firstName: string;
    lastName: string;
    photoUrl: string;
    id: string;

    constructor({firstName, lastName, photoUrl,id}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.photoUrl = photoUrl;
        this.id=id;
        
    }
}
