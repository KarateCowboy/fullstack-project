export type Category = {
  id: number,
  name: string
}

export const parseCategoryJson = function (categoryObj: any): Category {
  return {
    id: categoryObj.id ?? 0,
    name: categoryObj.name ?? "Unknown category"
  }
}
