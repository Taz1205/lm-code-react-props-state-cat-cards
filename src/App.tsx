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
          <br />
          <h2 className="header__title"> Dog details are as follows: </h2>
          <br />
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
      </main>

      <Footer />
    </>
  );
}

export default App;
