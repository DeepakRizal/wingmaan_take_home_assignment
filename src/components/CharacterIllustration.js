import Image from "next/image";
import { getGenderImage } from "@/utils/genderUtils";

export default function CharacterIllustration({ gender }) {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center z-10 pointer-events-none">
      <Image
        src={getGenderImage(gender, "welcome")}
        alt={`${gender} character illustration`}
        width={420}
        height={600}
        priority
        className="
          object-contain
          w-auto
          max-h-[70vh]
          sm:max-h-[75vh]
          md:max-h-[80vh]
          lg:max-h-[85vh]
        "
      />
    </div>
  );
}
