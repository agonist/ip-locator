"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  onSearch: (search: string) => void;
  className?: string;
};

export const SearchForm: React.FC<Props> = ({ onSearch, className }) => {
  const [value, setValue] = useState("");

  return (
    <div className={cn("flex bg-white rounded-xl pl-4", className)}>
      <input
        placeholder="search"
        className="flex w-full rounded-md text-black bg-transparent  px-3 py-1 text-sm placeholder:text-neutral-500 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
      <button
        className="bg-black text-white p-4 px-6 rounded-r-xl"
        onClick={() => {
          onSearch(value);
        }}
      >
        {">"}
      </button>
    </div>
  );
};
