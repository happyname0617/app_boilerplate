const URL = process.env.FOOD_URL!

export interface IFoodList {
    images: string[];
}
  
export const fetchFood = (setData: any) => () => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data: IFoodList) => setData(data))
    }
