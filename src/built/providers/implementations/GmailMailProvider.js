"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailMailProvider = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv = require('dotenv');
dotenv.config();
class GmailMailProvider {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_SMTP_USER,
                pass: process.env.GMAIL_SMTP_PASS
            }
        });
    }
    async sendMail(message) {
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
exports.GmailMailProvider = GmailMailProvider;
//# sourceMappingURL=GmailMailProvider.js.map