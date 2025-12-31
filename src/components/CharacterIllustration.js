import Image from "next/image";
import { getGenderImage } from "@/utils/genderUtils";

export default function CharacterIllustration({ gender }) {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-end justify-center z-10">
      <Image
        src={getGenderImage(gender, "welcome")}
        alt={`${gender} character illustration`}
        width={300}
        height={400}
        className="object-contain max-h-[60vh] w-auto"
        priority
      />
    </div>
  );
}

