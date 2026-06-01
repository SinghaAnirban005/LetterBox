import { Worker } from "bullmq";
import { redis } from "../redis";
import { emailClient } from "../services/email";

import { v4 as uuid } from "uuid"

new Worker("emails", async job => {
    const parsedData = job.data.parsed

    await emailClient.saveEmail({
        id: uuid(),

        from: parsedData.from?.text ??
        "unknown",

        to: parsedData.to?.value.map(
          (v: any) => v.address
        ) ?? [],

        subject: parsedData.subject,

      html:
        parsedData.html?.toString(),

      text: parsedData.text,

      attachments:
        parsedData.attachments.map(
          (a: any) => ({
            filename:
              a.filename ?? "",

            contentType:
              a.contentType,

            size: a.size
          })
        ),

      receivedAt:
        new Date().toISOString()
    }),
    {
        connection: redis
    }
})