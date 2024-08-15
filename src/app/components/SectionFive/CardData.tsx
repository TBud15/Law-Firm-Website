export interface CardData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const cardData: CardData[] = [
  // 1 card
  {
    icon: <img src="images/SectionFive/icons/visa.svg" />,
    title: "Visa & Entry Requirements",
    description:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },

  //   2 card
  {
    icon: <img src="images/SectionFive/icons/citizenship.svg" />,
    title: "Citizenship & Naturalization",
    description:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },

  //   3 card
  {
    icon: <img src="images/SectionFive/icons/immigration.svg" />,
    title: "Family Immigration",
    description:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },

  //   4 card
  {
    icon: <img src="images/SectionFive/icons/deportation.svg" />,
    title: "Deportation & Removal",
    description:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },

  //   5 card
  {
    icon: <img src="images/SectionFive/icons/legal-rights.svg" />,
    title: "Legal Rights of Immigrants",
    description:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },

  //   6 card
  {
    icon: <img src="images/SectionFive/icons/student.svg" />,
    title: "Student & Exchnage Visitor Program",
    description:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
];
