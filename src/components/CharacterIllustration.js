import Image from "next/image";
import { getGenderImage } from "@/utils/genderUtils";

export default function CharacterIllustration({ gender }) {
  return (
    <div
      className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        z-10
        flex
        items-end
        justify-center
        w-full
        pointer-events-none
      "
    >
      <Image
        src={getGenderImage(gender, "welcome")}
        alt={`${gender} character illustration`}
        priority
        width={500}
        height={750}
        className="
          object-contain
          w-auto
          max-h-[65vh]
          sm:max-h-[70vh]
          md:max-h-[75vh]
          lg:max-h-[78vh]
          xl:max-h-[80vh]
        "
      />
    </div>
  );
}
