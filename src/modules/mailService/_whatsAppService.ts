import MailService from "./MailService";

class WhatsAppService extends MailService {
  constructor(sender: string) { super(sender) }

  sendBroadcastMessage(message: string, receivers: string[]): void {
    super.sendBroadcastMessage(message, receivers)
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }

    console.log('Sent message via whatsapp')
  }

  sendMessage(message: string, receiver: string): void {
    super.sendMessage(message, receiver)
    console.log('Sent message via whatsapp')
  }
}


export default WhatsAppService