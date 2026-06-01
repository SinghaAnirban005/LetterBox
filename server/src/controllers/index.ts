import { Request, Response } from "express"
import { emailClient } from "../services/email"

export const emailHandler = async(req: Request, res: Response) => {
    const emails = await emailClient.getEmails()

    res.status(200).json(
        emails.map(e => JSON.parse(e))
    )
}

export const delEmail = async(req: Request, res: Response) => {
    await emailClient.delEmails()

    res.status(204)
}