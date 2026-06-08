import { SMTPServer } from "smtp-server";
import { simpleParser } from "mailparser"
import { emailQueue } from "../queue/queue";

export const smtpServer = new SMTPServer({
    authOptional: true,
    secure: false,

    disabledCommands: ['AUTH', 'STARTTLS'],

    async onData(stream, session, callback) {
        try {
            const parsedData = simpleParser(stream)
    
            await emailQueue.add(
                "capture-email",

                {
                    parsedData
                }
            )
    
            callback()
        } catch (error) {
            callback(error as Error)
        }
    }   
})