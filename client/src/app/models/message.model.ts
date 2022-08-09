export interface  Message {
    id: number;
    senderId: number;
    senderUsername: string;
    senderPhotoUrl: string;
    recipientId: number;
    recipientPhotoUrl: number;
    content: string;
    dateRead?: Date;
    messageSent: Date
}