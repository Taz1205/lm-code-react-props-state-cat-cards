interface DogCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  imageUrl: string;
}

const DogCard: React.FC<DogCardProps> = ({
  name,
  species,
  favFoods,
  birthYear,
  imageUrl,
}) => {
  return (
    <div className="card">
      <img
        src={
          imageUrl
            ? imageUrl
            : "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg"
        }
        alt={name}
        className="card_image"
      />
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods.join(", ")}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
    </div>
  );
};

export default DogCard;
