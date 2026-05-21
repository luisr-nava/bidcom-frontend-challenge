import Link from "next/link";

import { Container } from "../Container";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Bidcom</h3>

            <p className="mt-2 text-sm text-grey-666">
              Ecommerce desarrollado con Next.js, TypeScript y TailwindCSS.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Navegación</h4>

            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link
                href="/"
                className="text-grey-666 transition-colors hover:text-azul-bidcom">
                Inicio
              </Link>

            
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Ubicación</h4>

            <p className="mt-3 text-sm text-grey-666">
              Caldas 1551, Villa Ortúzar, CABA.
            </p>

            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
              <iframe
                title="Ubicación Bidcom"
                src="https://www.google.com/maps?q=Caldas+1551,+Villa+Ortúzar,+CABA&output=embed"
                className="h-48 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-4 text-center text-xs text-grey-666">
          © {new Date().getFullYear()} Bidcom Challenge.
        </div>
      </Container>
    </footer>
  );
}


