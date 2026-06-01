import { type Email } from "../types/email";

interface Props {
  email:
    | Email
    | null;
}

export default function EmailViewer({
  email,
}: Props) {
  if (!email) {
    return (
      <div
        className="
        flex-1
        flex
        items-center
        justify-center
        text-zinc-500
      "
      >
        No emails captured
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div
        className="
        border-b
        border-zinc-800
        p-5
      "
      >
        <h2
          className="
          text-xl
          font-semibold
        "
        >
          {email.subject}
        </h2>

        <div
          className="
          mt-3
          text-sm
          text-zinc-400
          space-y-1
        "
        >
          <p>
            <strong>
              From:
            </strong>{" "}
            {email.from}
          </p>

          <p>
            <strong>
              To:
            </strong>{" "}
            {email.to.join(
              ", "
            )}
          </p>

          <p>
            <strong>
              Received:
            </strong>{" "}
            {new Date(
              email.receivedAt
            ).toLocaleString()}
          </p>
        </div>
      </div>

      <div className="flex-1">
        <iframe
          title="preview"
          srcDoc={
            email.html ??
            `<pre>${email.text ?? ""}</pre>`
          }
          className="
          w-full
          h-full
          bg-white
        "
        />
      </div>
    </div>
  );
}