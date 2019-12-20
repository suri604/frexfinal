import { User } from './user';
import { Timestamp } from 'rxjs/internal-compatibility';

export class Message {
    message: string;
    createdAt: any;
    sender: User;

    constructor({message, createdAt, sender}) {
        this.message = message;
        this.createdAt = createdAt;
        this.sender = new User(sender);
    }
}
