export default function CurrPups({ title, image }) {
  return (
    <div className="
      bg-cream
      border border-[#556B2F]
      rounded-xl
      p-4
      shadow-md
      w-full
      max-w-xs
      mx-auto
      hover:shadow-lg
      transition duration-300
    ">
      <img
        src={image}
        alt={title}
        className="
          w-full
          aspect-[4/3]
          object-cover
          rounded-lg
          border border-[#8B5E3C]
        "
      />

      <p className="mt-3 text-[#556B2F] font-semibold text-base sm:text-lg">
        Hi, I am {title}
      </p>
    </div>
  );
}