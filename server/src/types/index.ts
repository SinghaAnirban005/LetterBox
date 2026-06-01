export interface StoredEmail {
    id: string,
    from: string,
    to: Array<string>,

    subject?: string,

    html?: string,
    text?: string,

    attachments: {
        filename: string,
        contentType: string,
        size: number
    }[],

    receivedAt: string
}