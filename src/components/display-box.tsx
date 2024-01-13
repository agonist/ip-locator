import { cn } from "@/lib/utils";

type Props = {
  label: string;
  value: string;
  className?: string;
};

export const DisplayBox: React.FC<Props> = ({ label, value, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      <p className="text-dark-grey text-xs font-medium">{label}</p>
      <p className="text-black text-2xl font-medium whitespace-pre-line truncate">
        {value}
      </p>
    </div>
  );
};
