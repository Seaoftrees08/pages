import Image from "next/image";

import nextConfig from "../../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || ".";

export default function GenshinWeaponsLogo({weapon = getRandomGenshinWeapon()}){

    switch (weapon){
        case GenshinWeapon.Swords:
            return(<Image style={{margin:8}} src={`${BASE_PATH}/weapons/swords.png`} alt={"Genshin Sword Logo"} width={128} height={128} />)
        case GenshinWeapon.Claymores:
            return(<Image style={{margin:8}} src={`${BASE_PATH}/weapons/claymores.png`} alt={"Genshin Claymores Logo"} width={128} height={128} />)
        case GenshinWeapon.Polearms:
            return(<Image style={{margin:8}} src={`${BASE_PATH}/weapons/polearms.png`} alt={"Genshin Polearms Logo"} width={128} height={128} />)
        case GenshinWeapon.Catalysts:
            return(<Image style={{margin:8}} src={`${BASE_PATH}/weapons/catalysts.png`} alt={"Genshin Catalysts Logo"} width={128} height={128} />)
        case GenshinWeapon.Bows:
            return(<Image style={{margin:8}} src={`${BASE_PATH}/weapons/bows.png`} alt={"Genshin Bows Logo"} width={128} height={128} />)
    }

}

export enum GenshinWeapon{
    Swords = "片手剣",
    Claymores = "両手剣",
    Polearms = "槍",
    Catalysts = "法器",
    Bows = "弓"
}

export function getRandomGenshinWeapon(){
    const index = Math.floor(Math.random() * Object.keys(GenshinWeapon).length);
    const values = Object.values(GenshinWeapon);
    return values[index];
}
