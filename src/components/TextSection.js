export default function TextSection({ heading, subtitle }) {
  return (
    <div className="flex flex-col items-start w-full mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
        {heading}
      </h1>
      {subtitle && (
        <p className="text-base text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

