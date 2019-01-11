import { useState, useEffect } from 'react'
import fetchFood from '../api/fetchFood'

export interface IFoodImages {
    images: string[];
}

const getFoodImages =  () => {
  const [foodImages, setFoodImages] = useState<IFoodImages | null>(null)

  useEffect(() => {
    fetchFood().then((data: IFoodImages) => setFoodImages(data))
  }, [])

  return foodImages
}

export default getFoodImages
