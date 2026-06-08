import { Queue } from "bullmq";
import { redis } from "../redis";

export const emailQueue = new Queue(
  "emails",
  {
    connection: {
        host: "redis",
        port: 6379
    },
  }
);