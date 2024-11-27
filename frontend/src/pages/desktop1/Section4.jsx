
import { Card } from "./Card";

const cardsData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 }
];

export default function CardGrid() {
  return (
    <main className="flex flex-wrap gap-8 items-start mt-5 max-md:max-w-full">
      {cardsData.map((card) => (
        <Card key={card.id} />
      ))}
      {cardsData.map((card) => (
        <Card key={card.id} />
      ))}
      {cardsData.map((card) => (
        <Card key={card.id} />
      ))}   
    </main>
  );
}