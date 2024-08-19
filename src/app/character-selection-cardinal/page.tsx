"use client"

import {useState} from "react";
import CharacterTypeWindow, {CharacterType, getRandomCharacter} from "@/component/csc/CharacterTypeWindow";
import {GenshinElement} from "@/component/csc/GenshinElementsLogo";
import {GenshinWeapon} from "@/component/csc/GenshinWeaponsLogo";
import {Button, ChakraProvider} from '@chakra-ui/react'
import SideSettings from "@/component/csc/SideSettings";

//Ver5.0 時点で未実装のタイプ
const notExistCharacterType = {element: GenshinElement.Hydro, weapon: GenshinWeapon.Claymores}

export default function Home() {

    const [filterCharaType, setFilterCharaType]
        = useState<CharacterType[]>([notExistCharacterType]);

    const [ allowDuplicates, setAllowDuplicates ] = useState<boolean>(false);

    const [characters, setCharacters]
        = useState<CharacterType[]>([
        getRandomCharacter(filterCharaType),
        getRandomCharacter(filterCharaType),
        getRandomCharacter(filterCharaType),
        getRandomCharacter(filterCharaType)
    ]);

    const role = () => {
        const newCharactersType: CharacterType[] = []

        for (let i = 0; i < 4; i++) {
            if(allowDuplicates){
                newCharactersType.push(getRandomCharacter(filterCharaType))
            }else{
                newCharactersType.push(getRandomCharacter(filterCharaType.concat(newCharactersType)))
            }
        }
        setCharacters(newCharactersType);
    }

    const toggleAllowDuplicates = () => {
        setAllowDuplicates(!allowDuplicates);
    }

    return (
        <main className="flex flex-row-reverse bg-gray-700 h-screen w-screen items-center justify-end">

            <ChakraProvider>
                <SideSettings
                    toggleAllowDuplicates={toggleAllowDuplicates}
                    allowDuplicates={allowDuplicates}
                />

                <div className="py-8 px-4 w-3/4 min-h-fit ">
                    <div className="flex gap-10 items-center justify-center">
                        <CharacterTypeWindow characterType={characters[0]}/>
                        <CharacterTypeWindow characterType={characters[1]}/>
                        <CharacterTypeWindow characterType={characters[2]}/>
                        <CharacterTypeWindow characterType={characters[3]}/>
                    </div>
                    <div className="p-1 mt-11 flex justify-center">
                        <Button colorScheme='blue' size='lg' onClick={role}>Role</Button>
                    </div>
                </div>
            </ChakraProvider>

        </main>
    );
}
