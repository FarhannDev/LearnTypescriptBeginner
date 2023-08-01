export interface MailServiceInterface {
  sender: string;
  sendMessage(message: string, receiver: string): void;
  sendBroadcastMessage(message: string, receivers: string[]): void;
  sendDelayedMessage(message: string, receiver: string, delay: number): void;
}

export default class MailService implements MailServiceInterface {
  public sender: string
  constructor(sender: string) { this.sender = sender }
  
  sendMessage(message: string, receiver: string): void {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }

  sendDelayedMessage(message: string, receiver: string, delay: number): void {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }

  sendBroadcastMessage(message: string, receivers: string[]): void {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}