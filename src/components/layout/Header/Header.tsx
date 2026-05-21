import Link from "next/link";
import { Container } from "../Container";
import { SearchBar } from "@/components/ui/SearchBar";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-azul-bidcom py-4 shadow-sm">
      <Container className="max-w-full">
        <div className="grid grid-cols-1 items-center gap-4 pt-2 md:grid-cols-[auto_1fr_auto] md:pt-0">
          <Link href="/" className="mx-auto md:mx-0">
            <Image
              src="/logo_bidcom.svg"
              alt="Bidcom"
              width={130}
              height={36}
              priority
            />
          </Link>
          <div className="mx-auto w-full max-w-175 px-6">
            <SearchBar />
          </div>
          <div className="w-32.5" />
        </div>
      </Container>
    </header>
  );
}
