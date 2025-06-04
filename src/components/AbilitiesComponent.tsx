import { IAbilitiesProps } from '@/lib/interfaces/PokeInterface'
import React from 'react'

const AbilitiesComponent = (props: IAbilitiesProps) => {
  return (
    <div>
        <div className="absolute overflow-auto h-fit xl:max-w-[904px] xl:top-[6.25rem] xl:left-[30rem] md:top-[20.75rem] md:left-[26rem] max-sm:top-[20.75rem] max-sm:left-[26rem]">
          <div className="bg-black opacity-65 rounded-md xl:w-[904px] h-[68px] md:w-[359px] max-sm:w-[177px]"></div>

          <p className="text-white absolute top-1 left-2">Abilities: </p>
          <p className="text-white absolute top-1 left-20">{props.text}</p>
        </div>
    </div>
  )
}

export default AbilitiesComponent