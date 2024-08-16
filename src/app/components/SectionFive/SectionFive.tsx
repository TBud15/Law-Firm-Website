import Card from "./Card";
import { cardData } from "./CardData";

const SectionFive: React.FC = () => {
  return (
    <section id="immigration-law">
      <div className="flex justify-center mt-8">
        <img src="images/SectionFour/divider.png" alt="divider" />
      </div>

      <div className="flex justify-center text-4xl font-sendFlowers">
        <p>Immigration Law</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionFive;
