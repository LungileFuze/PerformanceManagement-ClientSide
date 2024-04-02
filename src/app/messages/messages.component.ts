import { Component, Input } from '@angular/core';
import { Message, MessageType } from '../model/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
@Input() message: Message | null = null;
get getMessageClass(): string{
  if(this.message === null || this.message === undefined) return '';
  switch(this.message.messageType) {
    case MessageType.success: 
      return 'message-success';
    case MessageType.error: 
      return 'message-error';
    case MessageType.information:
      return 'message-information';
  }
}
}
