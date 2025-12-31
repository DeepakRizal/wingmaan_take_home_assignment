import Image from "next/image";
import { getGenderImage } from "@/utils/genderUtils";

const MIN_HEIGHT = 4.1;
const MAX_HEIGHT = 5.8;
const BASE_CHARACTER_HEIGHT = 280;
const MIN_SCALE = 0.7;
const MAX_SCALE = 1.3;

export default function HeightCharacter({ gender, height }) {
  const heightRange = MAX_HEIGHT - MIN_HEIGHT;
  const normalizedHeight = (height - MIN_HEIGHT) / heightRange;
  const scaleFactor = MIN_SCALE + normalizedHeight * (MAX_SCALE - MIN_SCALE);
  const characterHeight = BASE_CHARACTER_HEIGHT * scaleFactor;

  return (
    <div className="relative flex items-end" style={{ height: "400px" }}>
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-[var(--primary-purple)] rounded-l-3xl"></div>
      <div className="relative z-10 ml-12 flex items-end" style={{ height: "100%" }}>
        <Image
          src={getGenderImage(gender, "height")}
          alt={`${gender} character`}
          width={120}
          height={characterHeight}
          className="object-contain"
          style={{ height: `${characterHeight}px`, width: "auto" }}
        />
      </div>
    </div>
  );
}

