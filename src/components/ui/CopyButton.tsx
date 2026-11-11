import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CopyButtonProps {
  text: string;
  label: string;
}

type Status = "idle" | "copied" | "error";

const announcements: Record<Status, string> = {
  idle: "",
  copied: "Copiado al portapapeles",
  error: "No se pudo copiar",
};

export function CopyButton({ text, label }: CopyButtonProps) {
  const [status, setStatus] = useState<Status>("idle");
  const timeoutRef = useRef<number | undefined>(undefined);

  // Si el componente se desmonta, se cancela el temporizador pendiente.
  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setStatus("idle"), 2500);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="border-line hover:border-signal hover:text-signal inline-flex min-w-44 items-center justify-center gap-2 rounded-md border px-6 py-3 font-mono text-sm transition duration-200 active:scale-[0.97]"
      >
        {status === "copied" ? (
          <Check size={16} aria-hidden="true" />
        ) : (
          <Copy size={16} aria-hidden="true" />
        )}
        {status === "copied"
          ? "¡Copiado!"
          : status === "error"
            ? "No se pudo copiar"
            : label}
      </button>

      <span role="status" aria-live="polite" className="sr-only">
        {announcements[status]}
      </span>
    </>
  );
}
