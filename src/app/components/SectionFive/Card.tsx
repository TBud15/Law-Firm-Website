interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative max-w-sm p-6 bg-white rounded-lg shadow-md border transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="absolute -top-4 -left-0 sm:-left-4 p-2 bg-white border rounded-full shadow-md">
        <div className="w-8 h-8 text-gray-600 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h2 className="mt-6 text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
