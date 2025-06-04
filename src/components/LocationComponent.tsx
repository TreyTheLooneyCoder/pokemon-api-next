import { ILocationsProps } from '@/lib/interfaces/PokeInterface'
import React from 'react'

const LocationComponent = (props: ILocationsProps) => {
  return (
    <div>
        <div className="absolute overflow-auto h-fit max-w-[359px] xl:top-[20.5rem] xl:left-24 md:top-32 md:left-[26rem] max-sm:top-32 max-sm:left-[26rem]">
            <div className="bg-black opacity-65 rounded-md w-[359px] xl:h-[190px] md:h-[180px] max-sm:w-[177] max-sm:h-[100px]"></div>

            <p className="text-white absolute top-1 left-2">Locations: {props.text}</p>
            <p id="LocationText" className="text-white absolute top-1 left-22"></p>
        </div>
    </div>
  )
}

export default LocationComponent