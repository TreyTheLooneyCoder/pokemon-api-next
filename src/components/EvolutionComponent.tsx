import { IEvolutionsProps } from '@/lib/interfaces/PokeInterface'
import React from 'react'

const EvolutionComponent = (props: IEvolutionsProps) => {
  return (
    <div>
        <div className="absolute overflow-auto h-fit xl:max-w-[904px] xl:top-[20.5rem] xl:left-[30rem] md:max-w-[745px] md:top-[36rem] md:left-7 max-sm:max-w-[364px] max-sm:top-[36rem] max-sm:left-7">
          <div className="bg-black opacity-65 rounded-md xl:w-[904px] h-[190px] md:w-[745px] max-sm:w-[364px]"></div>

          <p className="text-white absolute top-1 left-2">Evolution: </p>
          <p id="EvoText" className="text-white absolute top-1 left-20">{props.text}</p>
        </div>
    </div>
  )
}

export default EvolutionComponent