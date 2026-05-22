import type { ProductDetailsSectionProps } from "./ProductDetailsSection.types";

export function ProductDetailsSection({ product }: ProductDetailsSectionProps) {
  return (
    <section className="mt-10 bg-white">
      <div className="bg-gray-100 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center md:text-left">
          <h2 className="text-center text-2xl font-semibold tracking-wide text-green-700">
            {product.brand ?? "Producto"}
          </h2>

          <h3 className="mt-6 text-base font-medium text-gray-900">
            Acerca de {product.title}
          </h3>

          <p className="mt-6 text-sm leading-6 text-gray-700">
            {product.description}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-center text-xl font-medium text-gray-900">
          Características
        </h2>

        <div className="mx-auto mt-5 max-w-xl overflow-hidden rounded-sm border border-gray-100">
          <div className="grid grid-cols-2 text-sm">
            <div className="bg-gray-100 px-4 py-3 font-medium text-gray-700">
              Marca:
            </div>
            <div className="bg-gray-50 px-4 py-3 text-gray-700">
              {product.brand ?? "Sin marca"}
            </div>

            <div className="bg-gray-100 px-4 py-3 font-medium text-gray-700">
              SKU:
            </div>
            <div className="bg-white px-4 py-3 text-gray-700">
              {product.sku}
            </div>

            <div className="bg-gray-100 px-4 py-3 font-medium text-gray-700">
              EAN:
            </div>
            <div className="bg-gray-50 px-4 py-3 text-gray-700">
              {product.meta.barcode}
            </div>

            <div className="bg-gray-100 px-4 py-3 font-medium text-gray-700">
              Categoría:
            </div>
            <div className="bg-white px-4 py-3 text-gray-700">
              {product.category}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-medium text-gray-900">
              Especificaciones
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p>Peso: {product.weight} kg</p>
              <p>
                Dimensiones: {product.dimensions.width} x{" "}
                {product.dimensions.height} x {product.dimensions.depth} cm
              </p>
              <p>Estado: {product.availabilityStatus}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-900">Garantía</h3>

            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p>{product.warrantyInformation}</p>

              <h4 className="text-lg font-medium text-gray-900">
                Se entrega con:
              </h4>

              <p>{product.shippingInformation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

