import { type Email } from "../types/email";

interface Props {
  email: Email;

  active: boolean;

  onClick: () => void;
}

export default function EmailRow({
  email,
  active,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`
      p-4
      border-b
      border-zinc-800
      cursor-pointer

      ${
        active
          ? "bg-zinc-800"
          : "hover:bg-zinc-900"
      }
    `}
    >
      <h3
        className="
        font-medium
        truncate
      "
      >
        {email.subject ??
          "(No Subject)"}
      </h3>

      <p
        className="
        text-sm
        text-zinc-400
        truncate
      "
      >
        {email.from}
      </p>

      <p
        className="
        text-xs
        text-zinc-500
      "
      >
        {new Date(
          email.receivedAt
        ).toLocaleString()}
      </p>
    </div>
  );
}