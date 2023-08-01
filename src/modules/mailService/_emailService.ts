import MailService from "./MailService";

class EmailService extends MailService {
  constructor(sender: string) { super(sender) }

  saveAsDraft(): void {
    console.log('Saving mail as draft');
  }
}


export default EmailService