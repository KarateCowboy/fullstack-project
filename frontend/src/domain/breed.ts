export type Image = {
  height: number,
  id: string,
  url: string,
  width: number
}
type Weight = {
  imperial: [number, number],
  metric: [number, number]
}

export type Breed = {
  description: string,
  id: string,
  name: string
}
export const parseBreedsJson = function (breedObj: any): Breed {
  return {
    description: breedObj.description ?? "Missing description",
    id: breedObj.id ?? "Missing breed ID",
    name: breedObj.name ?? "Missing breed name"
  }
}
