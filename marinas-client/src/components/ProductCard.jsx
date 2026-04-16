import Button from "./Button";

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border-2 border-zinc-300 bg-zinc-100 p-4">
      <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={product.img}
            alt={product.alt}
            className="aspect-4/3 w-full object-cover"
          />
        </div>
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
        {product.category} {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-zinc-900">
        {product.title}
      </h3>
      <p className="mt-2 text-base font-bold text-zinc-900">{product.price}</p>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        {product.content[0].substring(0, 120)}...
      </p>
      <Button
        className="bg-blue-900 text-white mt-4"
        to={`/products/${product.name}`}
      >
        View Product
      </Button>
    </article>
  );
};

export default ProductCard;
