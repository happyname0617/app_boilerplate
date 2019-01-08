const URL = '//localhost:3000/api'

export interface IFoodList {
    images: string[];
}
  
export const fetchFood = (setData: any) => () => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data: IFoodList) => setData(data))
    }

export const fetchFoodDefault = []