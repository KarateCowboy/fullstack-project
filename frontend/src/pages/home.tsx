import React, {useEffect, useState} from 'react'
import {Button, Grid, Select} from '@material-ui/core'
import {Breed} from "../domain/breed"
import {findAllBreeds, findAllCategories, nabTheCats} from "../service"
import {Category} from "../domain/categories"


const Home = function () {
  const [breeds, setBreeds] = useState<Breed[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    findAllBreeds().then((data) => {
      setBreeds(data ?? [])
    })
    findAllCategories().then((data) => {
      setCategories(data ?? [])
    })
  }, [])
  const handleBreedChange = () => {
  }
  const handleCategoryChange = () => {
  }
  return <div>
    <Grid container>
      <Grid item xs={12}>
        <Select
          native
          onChange={handleBreedChange}
          inputProps={{
            id: 'breed-select'
          }}
        >
          <option selected>Select a breed...</option>
          {breeds.map((breed: Breed) => (
            <option value={breed.id} key={breed.id} data-testid={breed.id}>
              {breed.name}
            </option>
          ))}
          <option aria-label="None" value=""/>
        </Select>
      </Grid>
      <Grid item xs={12}>
        <Select
          native
          onChange={handleCategoryChange}
          inputProps={{
            id: 'category-select'
          }}
        >
          <option selected>Select a category...</option>
          {categories.map((category: Category) => (
            <option value={category.id} key={category.id} data-testid={category.id}>
              {category.name}
            </option>
          ))}
          <option aria-label="None" value=""/>
        </Select>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            nabTheCats()
            console.log('i just clicked')
          }}
        >
          Search right meow!
        </Button>
      </Grid>
    </Grid>
  </div>

}

export default Home
