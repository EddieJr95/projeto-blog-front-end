import './card.css';

interface CardProps {
  title: string;
  date: string;
  image: string;
  text: string;
}

export function Card({ title, date, image, text }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h2>{date}</h2>
      <img src={image} />
      <p>{text}</p>
    </div>
  );
}
