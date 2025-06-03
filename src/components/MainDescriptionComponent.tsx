import React from 'react'
import Image from 'next/image'
import { useAppContext } from '@/lib/context/PokeApiContext'
import { IMainDescProps } from '@/lib/interfaces/PokeInterface'

const MainDescriptionComponent = (props: IMainDescProps) => {

   

  return (
    <div className="absolute top-10 left-24 ">

      <div className="bg-black opacity-65 rounded-md w-[355px] h-[267px] xs:w-[175px] max-sm:h-[165px]"></div>
      <div className="">
        {/* <Image width={30} height={30} className="" src="" alt=""/> */}
        <p className="text-white absolute text-xl top-3 left-60">#: {props.pokeId}</p>
        <p className="text-white absolute text-xl top-44 left-9">Name: {props.pokeName}</p>
        <p className="text-white absolute text-xl top-52 left-9">Element: {props.pokeType}</p>

        <Image width={30} height={30} id="RandomBtn" className="absolute bg-white rounded-md w-[45px] h-[45px] top-22 left-56" src="/reload.png" alt="Random pokemon button."/>
        <Image width={30} height={30} id="ShinyMode" className="absolute w-[45px] h-[40px] top-36 left-56" src="/brightness.png" alt="Change Icon for the img."/>
      </div> 
    </div>  
                

  )
}

export default MainDescriptionComponent