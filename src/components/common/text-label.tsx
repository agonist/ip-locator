import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

type Props = {
  label: string;
  value: string;
  loading: boolean;
  className?: string;
};

export const TextLabel: React.FC<Props> = ({
  label,
  value,
  loading,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 overflow-hidden", className)}>
      <p className="text-dark-grey text-xs font-medium">{label}</p>
      {loading ? (
        <Skeleton className="w-[100px] h-[32px] rounded-full" />
      ) : (
        <div className="min-w-0 ">
          <p className="text-black text-2xl font-medium line-clamp-2 ">
            {value}
          </p>
        </div>
      )}
    </div>
  );
};
