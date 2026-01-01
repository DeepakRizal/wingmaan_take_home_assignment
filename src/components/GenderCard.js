import Image from "next/image";

export default function GenderCard({ gender, imageSrc, imageAlt, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative flex flex-col items-center justify-center p-4 md:p-6 transition-all cursor-pointer bg-transparent min-w-[180px] w-full max-w-[240px]"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={100}
        height={120}
        className="object-contain"
      />
      {isSelected && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Image
            src="/icons/genderSelectedIcon.svg"
            alt="Selected"
            width={42}
            height={40}
            className="block"
          />
        </div>
      )}
    </button>
  );
}

