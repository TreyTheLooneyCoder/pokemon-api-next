'use client';
import { createContext, useContext, useState } from "react";

interface Context{
    pokeInput: string
    setPokeInput: (Pokemon: string) => void;

}

const AppContext = createContext<Context>({
    pokeInput: '',
    setPokeInput: (Pokemon: string) => '',
    
})

export function AppWrapper({ children }: {children: React.ReactNode}) {
    const [pokeInput, setPokeInput] = useState('');

    
    


    return (
        <AppContext.Provider value={ { pokeInput, setPokeInput } }>
            { children }
        </AppContext.Provider>
    )
}

export function useAppContext () {
    return useContext(AppContext);
}