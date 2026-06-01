interface Props {
  onRefresh: () => void;
  onClear: () => void;
}

export default function Header({
  onRefresh,
  onClear,
}: Props) {
  return (
    <div
      className="
      h-14
      border-b
      border-zinc-800
      flex
      items-center
      justify-between
      px-6
    "
    >
      <h1
        className="
        text-lg
        font-semibold
      "
      >
        SMTP Drain
      </h1>

      <div className="flex gap-2">
        <button
          onClick={onRefresh}
          className="
          px-4 py-2
          bg-zinc-800
          rounded-md
          hover:bg-zinc-700
        "
        >
          Refresh
        </button>

        <button
          onClick={onClear}
          className="
          px-4 py-2
          bg-red-500
          rounded-md
        "
        >
          Clear
        </button>
      </div>
    </div>
  );
}