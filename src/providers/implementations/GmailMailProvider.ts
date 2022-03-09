import { IMailProvider, IMessage } from "../IMailProvider";

import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

const dotenv = require('dotenv');
dotenv.config();


export class GmailMailProvider implements IMailProvider {
    private transporter: Mail;
    
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_SMTP_USER,
                pass: process.env.GMAIL_SMTP_PASS
            }
        });
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.address
            },
            from: {
                name: message.from.name,
                address: message.from.address
            },
            subject: message.subject,
            html: message.body
        });
    }
}