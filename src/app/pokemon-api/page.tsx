'use client';
import React, { useState } from 'react'
import MainDescriptionComponent from '@/components/MainDescriptionComponent';
import { Input } from '@/components/ui/Input';
import Image from 'next/image';
import { PkmnCall } from '@/lib/services/PokemonServices';
import { useAppContext } from '@/lib/context/PokeApiContext';
import { IPkmnInfo } from '@/lib/interfaces/PokeInterface';


const pokemonApi = () => {
  const {pokeInput, setPokeInput} = useAppContext();
  const [pokemonFetched, setPokemonFetched] = useState<IPkmnInfo>();
      
  async function savePokemon() {
    let fetchedPokemon: any = {};
    fetchedPokemon = await PkmnCall(pokeInput);
    console.log(fetchedPokemon);
    setPokemonFetched(fetchedPokemon);
  }
 
  return (
    <div style={{backgroundImage: 'url("/PokemonApiBackground.jpeg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', }}>
      
      <div className="absolute top-10 left-[47.75rem]">
        <div className="max-w-[838px] flex flex-row gap-x-3">
          <Input type="text" className='w-[40rem] h-[2rem] block border rounded-lg text-white placeholder-white bg-black opacity-65' 
          onChange={(e) => setPokeInput(e.target.value)}/>
      
          <button className='rounded-md bg-blue-400 py-[.15rem] px-[.55rem]' onClick={savePokemon}>search</button>
      
          <Image width={30} height={30} src="/star.png" alt="star icon"/>
        </div>
      </div>

      <MainDescriptionComponent pokeId={pokemonFetched ? pokemonFetched.id : 0} pokeName={pokemonFetched ? pokemonFetched.name : ''} pokeType={pokemonFetched ? pokemonFetched.types[0].type.name : ''}/>
      

        
    </div>
  )
}

export default pokemonApi