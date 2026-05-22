import {
  CreditCard,
  Gift,
  MapPin,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { PriceInfo } from "../PriceInfo";
import type { ProductPurchasePanelProps } from "./ProductPurchasePanel.types";

export function ProductPurchasePanel({ product }: ProductPurchasePanelProps) {
  return (
    <aside className="rounded-md border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between gap-3 text-xs text-grey-666">
        <span>{product.stock} disponibles</span>

        <span className="flex items-center gap-1">
          {product.reviews.length} opiniones · {product.rating.toFixed(1)}
          <Star size={14} className="fill-azul-bidcom text-azul-bidcom" />
        </span>
      </div>

      <h1 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
        {product.title}
      </h1>

      <div className="mt-5 rounded-md bg-gray-50 p-4">
        <span className="rounded bg-black px-2 py-1 text-[10px] font-bold uppercase text-white">
          Mejor precio
        </span>

        <div className="mt-3">
          <PriceInfo
            price={product.price}
            discountPercentage={product.discountPercentage}
          />
        </div>
      </div>

      <p className="mt-3 text-xs text-grey-666">
        Precio sin impuestos nacionales incluido.
      </p>

      <div className="mt-5 space-y-3 text-sm">
        <p className="flex items-start gap-2 font-semibold text-green-700">
          <Truck size={18} />
          ¡Tu envío puede ser gratis!
        </p>

        <p className="flex items-start gap-2 text-azul-bidcom">
          <MapPin size={18} />
          Ingresá tu Código Postal
        </p>

        <p className="flex items-start gap-2 text-green-700">
          <Truck size={18} />
          {product.shippingInformation}
        </p>

        <p className="flex items-start gap-2 text-green-700">
          <ShieldCheck size={18} />
          {product.warrantyInformation}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4 rounded-full border border-gray-300 py-1 text-sm">
        <span className="px-2 text-lg text-grey-666">-</span>

        <span>1</span>

        <span className="px-2 text-lg text-azul-bidcom">+</span>

        <span className="text-xs text-grey-666">
          ({product.stock} disponibles)
        </span>
      </div>

      <div className="mt-5 space-y-3">
        <Button className="w-full rounded-full">Comprar ahora</Button>

        <Button variant="secondary" className="w-full rounded-full">
          Agregar al carrito
        </Button>
      </div>

      <div className="mt-4 rounded-md border border-gray-200 p-3">
        <p className="flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Gift size={18} className="text-azul-bidcom" />
          Envolver para regalo
        </p>
      </div>

      <div className="mt-4 space-y-2 text-xs text-gray-700">
        <p>↩ {product.returnPolicy}</p>
        <p>Compra segura.</p>
        <p>Compra mínima: {product.minimumOrderQuantity} unidades.</p>

        <p className="flex items-center gap-1">
          <CreditCard size={14} />
          12 cuotas sin interés.
        </p>
      </div>
    </aside>
  );
}

