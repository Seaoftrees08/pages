"use client"

import {useState} from "react";
import CharacterTypeWindow, {CharacterType, getRandomCharacter} from "@/component/csc/CharacterTypeWindow";
import {GenshinElement} from "@/component/csc/GenshinElementsLogo";
import {GenshinWeapon} from "@/component/csc/GenshinWeaponsLogo";
import {Button, ChakraProvider} from '@chakra-ui/react'
import SideSettings from "@/component/csc/SideSettings";
import Head from 'next/head';

const notExistCharacterType = {element: GenshinElement.Hydro, weapon: GenshinWeapon.Claymores}

export default function Cardinal(){
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

    const addFilter = (cType: CharacterType) => {
        let isExist = false;
        filterCharaType.forEach((fct) => {
            if(fct.element === cType.element && fct.weapon === cType.weapon){
                isExist = true;
            }
        })
        if(!isExist && filterCharaType.length < 20){ //ランダムな選定方法を取っているため、filterをかけすぎるとフリーズする
            const newCharactersFilter: CharacterType[] = [...filterCharaType, cType];
            setFilterCharaType(newCharactersFilter);
        }
    }

    const removeFilter = (cType: CharacterType) => {
        setFilterCharaType(
            filterCharaType.filter(c => !(c.element === cType.element && c.weapon === cType.weapon))
        );
    }

    return (
        <div className="app">
            <Head>
                <title>キャラ選定カーディナル</title>
            </Head>

            <main className="flex flex-row-reverse bg-gray-700 h-screen w-screen items-center justify-end">

                <ChakraProvider>
                    <SideSettings
                        toggleAllowDuplicates={toggleAllowDuplicates}
                        allowDuplicates={allowDuplicates}
                        filterCharaType={filterCharaType}
                        addFilter={addFilter}
                        removeFilter={removeFilter}
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
        </div>

    );
}