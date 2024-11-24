interface ButtonProps {
  id: string;
  label: string;
  className: string | undefined;
}

export default function Button({ id, label, className }: ButtonProps) {
  return (
    <button
      id={id}
      className={`text-2xl border-2 rounded-lg px-4 py-2 cursor-pointer transition-colors ${className}`}
    >
      {label}
    </button>
  );
}
