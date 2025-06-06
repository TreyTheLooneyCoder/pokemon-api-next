import { IFavoritesProps } from '@/lib/interfaces/PokeInterface'
import React from 'react'

const FavoritesComponent = (props: IFavoritesProps) => {
  return (
    <div>
        <div className="absolute overflow-auto xl:mb-2 xl:h-fit xl:max-w-[1290px] xl:top-[33.75rem] xl:left-24 md:max-w-[745px] md:top-[50rem] md:left-7 max-sm:max-w-[364px] max-sm:top-[50rem] max-sm:left-7">
          <div className="bg-black opacity-65 rounded-md xl:w-[1290px] xl:h-[190px] md:w-[737px] md:h-[492px] max-sm:w-[364px] max-sm:h-[323px]"></div>

          <p className="text-white absolute top-1 left-2">Favorites: </p>
          <ul id="FavsText" className="text-white absolute top-1 left-20">{props.text}</ul>
        </div>
    </div>
  )
}

export default FavoritesComponent