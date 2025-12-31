export const GENDER_IMAGES = {
  Man: {
    welcome: "/guyCharacter (1).png",
    height: "/peep-standing-15-guy.png",
  },
  Woman: {
    welcome: "/girlCharacter.png",
    height: "/peep-standing-15-girl.png",
  },
};

export function getGenderImage(gender, type = "welcome") {
  const normalizedGender = gender === "Man" ? "Man" : "Woman";
  return GENDER_IMAGES[normalizedGender]?.[type] || GENDER_IMAGES.Man[type];
}

