export interface CardData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const cardData: CardData[] = [
  // 1 card
  {
    icon: <img src="images/SectionFour/icons/ring-marriage.svg" />,
    title: "Marriage and Civil Unions",
    description:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },

  //   2 card
  {
    icon: <img src="images/SectionFour/icons/divorce.svg" />,
    title: "Divorce and Seperation",
    description:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },

  //   3 card
  {
    icon: <img src="images/SectionFour/icons/child.svg" />,
    title: "Child Protection",
    description:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },

  //   4 card
  {
    icon: <img src="images/SectionFour/icons/adoption.svg" />,
    title: "Adoption",
    description:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },

  //   5 card
  {
    icon: <img src="images/SectionFour/icons/guard.svg" />,
    title: "Guardianship & Conservatorship",
    description:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },

  //   6 card
  {
    icon: <img src="images/SectionFour/icons/law-hammer.svg" />,
    title: "Elder Law & Family Care",
    description:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
];
