import Dog from "./dog";
import { v4 as uuidv4 } from "uuid";

const dogData: Array<Dog> = [
  {
    name: "Floofus",
    species: "Puppy",
    favFoods: ["marshmallows"],
    birthYear: 2020,
    imageUrl:
      "https://www.animalfriends.co.uk/siteassets/media/images/blog-images/dog-blogs/64_shutterstock_119524480_article_popular_small_dog_breed_maltese.jpg",
  },
  {
    name: "Doofus",
    species: "Doggo",
    favFoods: ["porridge, dog food"],
    birthYear: 2010,
    imageUrl:
      "https://www.animalfriends.co.uk/siteassets/media/images/blog-images/dog-blogs/64_shutterstock_1814041268_article_popular_small_dog_breed_-pomeranian.jpg",
  },
  {
    name: "Goofus",
    species: "Dog",
    favFoods: ["bouncy balls"],
    birthYear: 2015,
    imageUrl: "http://farm5.staticflickr.com/4112/5170590074_066e255655_o.jpg",
  },
];

dogData.forEach((dog) => (dog.id = uuidv4()));
console.log(dogData);
export default dogData;
