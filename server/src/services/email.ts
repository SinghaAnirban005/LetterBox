import { redis } from "../redis"
import { StoredEmail } from "../types"

export class emailService {
    private KEY: string

    constructor(key: string) {
        this.KEY = key
    }

    async saveEmail(email: StoredEmail) {
        await redis.lpush(this.KEY, JSON.stringify(email))

        await redis.ltrim(this.KEY, 0, 999)
    }

    async getEmails() {
        const emails = await redis.lrange(this.KEY, 0, 100)

        return emails
    }

    async delEmails() {
        await redis.del(this.KEY)
    }
}  

export const emailClient = new emailService("emails")