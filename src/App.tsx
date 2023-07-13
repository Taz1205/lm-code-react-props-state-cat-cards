import "./App.css";
import { useState } from "react";
import Cat from "./data/cat";
import Dog from "./data/dog";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import CatCard from "./components/cat_card";
import catData from "./data/catData";
import DogCard from "./components/dog_card";
import dogData from "./data/dog-data";

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const [dogs, setDogs] = useState<Array<Dog>>(dogData);

  const [newCatName, setNewCatName] = useState<string>("");
  const [newCatSpecies, setNewCatSpecies] = useState<string>("");
  const [newCatFavFood, setNewCatFavFood] = useState<string>("");
  const [newCatBirthYear, setNewCatBirthYear] = useState<number>(0);

  const [newDogName, setNewDogName] = useState<string>("");
  const [newDogSpecies, setNewDogSpecies] = useState<string>("");
  const [newDogFavFood, setNewDogFavFood] = useState<string>("");
  const [newDogBirthYear, setNewDogBirthYear] = useState<number>(0);
  const [newDogImageURL, setNewDogImageURL] = useState<string>("");

  const handleAddCat = () => {
    const newCat = {
      id: (cats.length + 1).toString(),
      name: newCatName,
      species: newCatSpecies,
      favFoods: newCatFavFood.split(",").map((item) => item.trim()),
      birthYear: newCatBirthYear,
    };

    setCats([...cats, newCat]);

    setNewCatName("");
    setNewCatSpecies("");
    setNewCatFavFood("");
    setNewCatBirthYear(0);
  };

  const handleAddDog = () => {
    const newDog = {
      id: (dogs.length + 1).toString(),
      name: newDogName,
      species: newDogSpecies,
      favFoods: newDogFavFood.split(",").map((item) => item.trim()),
      birthYear: newDogBirthYear,
      imageUrl: newDogImageURL,
    };

    setDogs([...dogs, newDog]);

    setNewDogName("");
    setNewDogSpecies("");
    setNewDogFavFood("");
    setNewDogBirthYear(0);
    setNewDogImageURL("");
  };

  const catCount = cats.length;
  const dogCount = dogs.length;

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />
      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <CatCard
              key={cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              catIndex={index}
            />
          ))}
        </div>
        <br />
        <div className="form__wrapper">
          <div className="form__container">
            <h2>Add a New Cat</h2>

            <label>
              Cat Name:
              <input
                type="text"
                placeholder="Cat name"
                value={newCatName}
                onChange={(event) => setNewCatName(event.target.value)}
              />
            </label>

            <label>
              Species:
              <input
                type="text"
                placeholder="Cat species"
                value={newCatSpecies}
                onChange={(event) => setNewCatSpecies(event.target.value)}
              />
            </label>

            <label>
              Favorite Food:
              <input
                type="text"
                placeholder="Favorite food (separated by commas)"
                value={newCatFavFood}
                onChange={(event) => setNewCatFavFood(event.target.value)}
              />
            </label>

            <label>
              Birth Year:
              <input
                type="number"
                placeholder="Birth year"
                value={newCatBirthYear}
                onChange={(event) =>
                  setNewCatBirthYear(parseInt(event.target.value))
                }
              />
            </label>

            <button className="button" onClick={handleAddCat}>
              Add Cat
            </button>
          </div>
        </div>
        <br />
        <h2 className="header__title"> Dog details are as follows: </h2>
        <br />
        <div className="cards__wrapper">
          {dogs.map((dog) => (
            <>
              <DogCard
                key={dog.id}
                name={dog.name}
                species={dog.species}
                favFoods={dog.favFoods}
                birthYear={dog.birthYear}
                imageUrl={dog.imageUrl}
              />
            </>
          ))}
        </div>
        <br />
        <div className="form__wrapper">
          <div className="form__container">
            <h2>Add a New Dog</h2>

            <label>
              Dog Name:
              <input
                type="text"
                placeholder="Dog name"
                value={newDogName}
                onChange={(event) => setNewDogName(event.target.value)}
              />
            </label>

            <label>
              Species:
              <input
                type="text"
                placeholder="Dog species"
                value={newDogSpecies}
                onChange={(event) => setNewDogSpecies(event.target.value)}
              />
            </label>

            <label>
              Favorite Food:
              <input
                type="text"
                placeholder="Favorite food (separated by commas)"
                value={newDogFavFood}
                onChange={(event) => setNewDogFavFood(event.target.value)}
              />
            </label>

            <label>
              Birth Year:
              <input
                type="number"
                placeholder="Birth year"
                value={newDogBirthYear}
                onChange={(event) =>
                  setNewDogBirthYear(parseInt(event.target.value))
                }
              />
            </label>

            <label>
              Image URL of your dog:
              <input
                type="string"
                placeholder="Image URL of your dog"
                value={newDogImageURL}
                onChange={(event) => setNewDogImageURL(event.target.value)}
              />
            </label>

            <button className="button" onClick={handleAddDog}>
              Add Dog
            </button>
          </div>
        </div>
        <br />
      </main>

      <Footer />
    </>
  );
}

export default App;
