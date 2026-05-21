import Link from "next/link";
import { Container } from "../Container";
import { SearchBar } from "@/components/ui/SearchBar";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-azul-bidcom py-4 shadow-sm">
      {" "}
      <Container className="max-w-full">
        <div className="grid items-center gap-4 md:grid-cols-[auto_1fr_auto] pt-2 md:pt-0">
          {" "}
          <Link href="/" className="mx-auto md:mx-0">
            <Image
              src="/logo_bidcom.svg"
              alt="Bidcom"
              width={130}
              height={36}
              priority
            />
          </Link>
          <div className="mx-auto w-full max-w-[700px] px-6">
            <SearchBar />
          </div>
          <div className="w-[130px]" />
        </div>
      </Container>
    </header>
  );
}


