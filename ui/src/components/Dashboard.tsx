import { useEffect, useState } from "react";

import { type Email } from "../types/email";

import Header from "./Header";
import Sidebar from "./Sidebar";
import EmailViewer from "./EmailViewer";

import {
  getEmails,
  clearEmails,
} from "../lib/api";

export default function Dashboard() {
  const [emails, setEmails] =
    useState<Email[]>([]);

  const [selectedEmail, setSelectedEmail] =
    useState<Email | null>(null);

  async function loadEmails() {
    const data =
      await getEmails();

    setEmails(data);

    if (
      data.length &&
      !selectedEmail
    ) {
      setSelectedEmail(data[0]);
    }
  }

  useEffect(() => {
    loadEmails();

    const interval =
      setInterval(
        loadEmails,
        5000
      );

    return () =>
      clearInterval(
        interval
      );
  }, []);

  async function handleClear() {
    await clearEmails();

    setEmails([]);
    setSelectedEmail(null);
  }

  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-white">
      <Header
        onRefresh={
          loadEmails
        }
        onClear={
          handleClear
        }
      />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          emails={emails}
          selectedEmail={
            selectedEmail
          }
          onSelect={
            setSelectedEmail
          }
        />

        <EmailViewer
          email={
            selectedEmail
          }
        />
      </div>
    </div>
  );
}