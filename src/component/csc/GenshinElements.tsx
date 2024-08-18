import Image from "next/image";

import nextConfig from "../../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || ".";

export function GenshinElements(element: GenshinElement){

    switch (element){
        case GenshinElement.Anemo:
            return(<Image src={`${BASE_PATH}/elements/anemo.png`} alt={"Genshin Anemo Logo"}/>)
        case GenshinElement.Geo:
            return(<Image src={`${BASE_PATH}/elements/geo.png`} alt={"Genshin Geo Logo"}/>)
        case GenshinElement.Electro:
            return(<Image src={`${BASE_PATH}/elements/electro.png`} alt={"Genshin Electro Logo"}/>)
        case GenshinElement.Dendro:
            return(<Image src={`${BASE_PATH}/elements/dendro.png`} alt={"Genshin Dendro Logo"}/>)
        case GenshinElement.Hydro:
            return(<Image src={`${BASE_PATH}/elements/hydro.png`} alt={"Genshin Hydro Logo"}/>)
        case GenshinElement.Pyro:
            return(<Image src={`${BASE_PATH}/elements/pyro.png`} alt={"Genshin Pyro Logo"}/>)
        case GenshinElement.Cryo:
            return(<Image src={`${BASE_PATH}/elements/cryo.png`} alt={"Genshin Cryo Logo"}/>)
    }

}

export enum GenshinElement {
    Anemo = "風",
    Geo = "岩",
    Electro = "雷",
    Dendro = "草",
    Hydro = "水",
    Pyro = "炎",
    Cryo = "氷"
}