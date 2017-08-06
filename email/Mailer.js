const sendgrid = require('sendgrid');

const keys = require('../config/keys');

// could destructure, but following SendGrid convention
const helper = sendgrid.mail;

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sendgridAPI = sendgrid(keys.sendgridKey);
    this.from_email = new helper.Email('no-reply@heir.company');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    // addContent to email body - SendGrid helper function
    this.addContent(this.body);
    // enable click tracking
    this.addClickTracking();
    // add formatted recipients list to Mailer
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sendgridAPI.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });

    const response = await this.sendgridAPI.API(request);
    return response;
  }
}

module.exports = Mailer;
