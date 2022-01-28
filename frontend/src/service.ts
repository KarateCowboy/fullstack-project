import axios from 'axios'
import {Breed, parseBreedsJson} from "./domain/breed"
import {parseCategoryJson} from "./domain/categories"


export const findAllBreeds = async () => axios.get("https://api.thecatapi.com/v1/breeds")
  .then((res) => res.data.map(parseBreedsJson))
  .catch((err: any) => console.error(err))
export const findAllCategories = async () => axios.get("https://api.thecatapi.com/v1/categories")
  .then((res) => res.data.map(parseCategoryJson))
  .catch((err: any) => console.error(err))
