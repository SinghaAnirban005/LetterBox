import { type Email } from "../types/email";

import EmailRow from "./EmailRow";

interface Props {
  emails: Email[];

  selectedEmail:
    | Email
    | null;

  onSelect: (
    email: Email
  ) => void;
}

export default function Sidebar({
  emails,
  selectedEmail,
  onSelect,
}: Props) {
  return (
    <div
      className="
      w-[350px]
      border-r
      border-zinc-800
      overflow-y-auto
    "
    >
      {emails.map(
        (email) => (
          <EmailRow
            key={email.id}
            email={email}
            active={
              selectedEmail?.id ===
              email.id
            }
            onClick={() =>
              onSelect(
                email
              )
            }
          />
        )
      )}
    </div>
  );
}