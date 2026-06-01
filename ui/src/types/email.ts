export interface Email {
  id: string;
  from: string;
  to: string[];
  subject?: string;
  html?: string;
  text?: string;
  receivedAt: string;

  attachments: {
    filename: string;
    contentType: string;
    size: number;
  }[];
}