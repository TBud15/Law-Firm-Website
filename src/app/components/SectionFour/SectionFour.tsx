import Card from "./Card";
import { cardData } from "./CardData";

const SectionFour: React.FC = () => {
  return (
    <section id="family-law">
      <div className="flex justify-center mt-8">
        <img src="images/SectionFour/divider.png" alt="divider" />
      </div>

      <div className="flex justify-center text-4xl font-sendFlowers">
        <p>Family Law</p>
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

export default SectionFour;
