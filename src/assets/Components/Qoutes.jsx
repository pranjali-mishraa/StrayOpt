export default function Quotes({ para }) {
  return (
    <div className="
      bg-softgreen
      rounded-2xl
      p-4 sm:p-5 md:p-6
      shadow-md
      border border-primary
      w-full
      hover:shadow-lg
      transition duration-300
    ">
      <p className="
        text-chocolate
        text-base sm:text-lg md:text-xl
        leading-relaxed
        italic
      ">
        {para}
      </p>
    </div>
  );
}