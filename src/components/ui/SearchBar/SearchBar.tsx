"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?s=${encodeURIComponent(query)}`);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex h-11 items-center overflow-hidden rounded-sm bg-white">
        <input
          type="text"
          placeholder="¿Qué estás buscando?"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="h-full w-full px-4 text-sm text-black outline-none placeholder:text-grey-999"
        />

        <button
          type="submit"
          className="flex h-full w-14 items-center justify-center border-l border-gray-200 text-grey-666 transition-colors hover:bg-gray-100 cursor-pointer">
          <Search size={22} />
        </button>
      </div>
    </form>
  );
}

