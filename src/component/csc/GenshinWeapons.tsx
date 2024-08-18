import Image from "next/image";

import nextConfig from "../../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || ".";

export function GenshinWeapons(weapon: GenshinWeapon){

    switch (weapon){
        case GenshinWeapon.Swords:
            return(<Image src={`${BASE_PATH}/weapons/swords.png`} alt={"Genshin Sword Logo"}/>)
        case GenshinWeapon.Claymores:
            return(<Image src={`${BASE_PATH}/weapons/claymores.png`} alt={"Genshin Claymores Logo"}/>)
        case GenshinWeapon.Polearms:
            return(<Image src={`${BASE_PATH}/weapons/polearms.png`} alt={"Genshin Polearms Logo"}/>)
        case GenshinWeapon.Catalysts:
            return(<Image src={`${BASE_PATH}/weapons/catalysts.png`} alt={"Genshin Catalysts Logo"}/>)
        case GenshinWeapon.Bows:
            return(<Image src={`${BASE_PATH}/weapons/bows.png`} alt={"Genshin Bows Logo"}/>)
    }

}

export enum GenshinWeapon{
    Swords = "片手剣",
    Claymores = "両手剣",
    Polearms = "槍",
    Catalysts = "法器",
    Bows = "弓"
}
