export class Message {
    messages: string[];
    messageType: MessageType;
    constructor(messages: string[], messageType: MessageType) {
        this.messageType = messageType;
        this.messages = messages
    }
    static error(message: string): Message {
        const messages = [message];
        return new Message(messages, MessageType.error);
    }
    static success(message: string): Message {
        const messages = [message];
        return new Message(messages, MessageType.success)
    }
}

export enum MessageType {
    success = 1,
    error = 2,
    information = 3
}