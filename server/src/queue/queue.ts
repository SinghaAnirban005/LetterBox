import { Queue } from "bullmq";
import { redis } from "../redis";

export const emailQueue = new Queue('emails')