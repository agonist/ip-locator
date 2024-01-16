"use client";

import { isDomain, isIPv4, isIPv6 } from "@/lib/ipify";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  onSearch: (search: string) => void;
  className?: string;
};

export const SearchForm: React.FC<Props> = ({ onSearch, className }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function handleSearch(search: string) {
    if (!(isIPv4(search) || isIPv6(search) || isDomain(search))) {
      setError(true);
      return;
    }
    setError(false);
    onSearch(search);
  }

  return (
    <div
      className={cn(
        "flex bg-white rounded-xl pl-4",
        className,
        error ? "border-2 border-red-500" : ""
      )}
    >
      <input
        placeholder="Search for any address IP or domain"
        type="text"
        className="flex w-full rounded-md text-very-dark-grey bg-transparent px-3 py-1 text-sm placeholder:text-neutral-500 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
      <button
        className="bg-black text-white p-4 px-6 rounded-r-xl hover:bg-very-dark-grey"
        onClick={() => {
          handleSearch(value);
        }}
      >
        {">"}
      </button>
    </div>
  );
};
