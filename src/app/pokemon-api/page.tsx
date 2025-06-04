'use client';
import React, { useState } from 'react'
import MainDescriptionComponent from '@/components/MainDescriptionComponent';
import { Input } from '@/components/ui/Input';
import Image from 'next/image';
import { PkmnCall } from '@/lib/services/PokemonServices';
import { useAppContext } from '@/lib/context/PokeApiContext';
import { IPkmnInfo } from '@/lib/interfaces/PokeInterface';
import AbilitiesComponent from '@/components/AbilitiesComponent';
import LocationComponent from '@/components/LocationComponent';
import FavoritesComponent from '@/components/FavoritesComponent';
import EvolutionComponent from '@/components/EvolutionComponent';
import MovesComponent from '@/components/MovesComponent';


const pokemonApi = () => {
  const {pokeInput, setPokeInput} = useAppContext();
  const [pokemonFetched, setPokemonFetched] = useState<IPkmnInfo>();
      
  async function saveInputAsPokemon() {
    let fetchedPokemon: any = {};
    fetchedPokemon = await PkmnCall(pokeInput);
    console.log(fetchedPokemon);
    setPokemonFetched(fetchedPokemon);
  }
 
  return (
    <div style={{backgroundImage: 'url("/PokemonApiBackground.jpeg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', }}>
      
      <div className="absolute top-10 left-[30.5rem]">
        <div className="max-w-[56rem] flex flex-row gap-x-3">
          <Input type="text" className='w-[56rem] h-[1.75rem] block border-spacing-0.5 rounded-md text-white placeholder-white bg-black opacity-65' onChange={(e) => setPokeInput(e.target.value)} placeholder='Search...'/>
      
          <button className='rounded-md bg-blue-400 h-[1.75rem] px-[.55rem]' onClick={saveInputAsPokemon}>search</button>
      
          <Image width={30} height={30} className='hover:cursor-pointer' src="/star.png" alt="star icon"/>
        </div>
      </div>

      <MainDescriptionComponent pokeId={pokemonFetched ? pokemonFetched.id : 0} pokeName={pokemonFetched ? pokemonFetched.name : ''} pokeType={pokemonFetched ? pokemonFetched.types[0].type.name : ''}/>
      <AbilitiesComponent/>
      <LocationComponent/>
      <FavoritesComponent/>
      <EvolutionComponent/>
      <MovesComponent/>


        
    </div>
  )
}

export default pokemonApi