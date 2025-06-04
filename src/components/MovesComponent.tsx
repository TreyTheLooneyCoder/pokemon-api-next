import { IMovesProps } from '@/lib/interfaces/PokeInterface'
import React from 'react'

const MovesComponent = (props: IMovesProps) => {
  return (
    <div>
        <div className="absolute overflow-auto h-[123px] xl:max-w-[904px] xl:top-[11.5rem] xl:left-[30rem] md:max-w-[745px] md:top-[26.5rem] md:left-7 max-sm:max-w-[364px] max-sm:top-[26.5rem] max-sm:left-7">
          <div className="bg-black opacity-65 rounded-md xl:w-[903px] h-[400px] md:w-[745px] max-sm:w-[364px]"></div>

          <p className="text-white absolute top-1 left-2">Moves: </p>
          <p id="MovesText" className="text-white absolute top-1 left-20">{props.text}</p>
        </div>
    </div>
  )
}

export default MovesComponent