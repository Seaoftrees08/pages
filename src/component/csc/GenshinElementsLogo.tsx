import Image from "next/image";

import nextConfig from "../../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || ".";

export default function GenshinElementsLogo({
    element = getRandomGenshinElement(),
    size = 128,
    margin = 8
}){

    switch (element){
        case GenshinElement.Anemo:
            return(<Image style={{margin:margin}} src={`${BASE_PATH}/elements/anemo.png`} alt={"Genshin Anemo Logo"} width={size} height={size} />)
        case GenshinElement.Geo:
            return(<Image style={{margin:margin}} src={`${BASE_PATH}/elements/geo.png`} alt={"Genshin Geo Logo"} width={size} height={size} />)
        case GenshinElement.Electro:
            return(<Image style={{margin:margin}} src={`${BASE_PATH}/elements/electro.png`} alt={"Genshin Electro Logo"} width={size} height={size} />)
        case GenshinElement.Dendro:
            return(<Image style={{margin:margin}} src={`${BASE_PATH}/elements/dendro.png`} alt={"Genshin Dendro Logo"} width={size} height={size} />)
        case GenshinElement.Hydro:
            return(<Image style={{margin:margin}} src={`${BASE_PATH}/elements/hydro.png`} alt={"Genshin Hydro Logo"} width={size} height={size} />)
        case GenshinElement.Pyro:
            return(<Image style={{margin:margin}} src={`${BASE_PATH}/elements/pyro.png`} alt={"Genshin Pyro Logo"} width={size} height={size} />)
        case GenshinElement.Cryo:
            return(<Image style={{margin:margin}} src={`${BASE_PATH}/elements/cryo.png`} alt={"Genshin Cryo Logo"} width={size} height={size} />)
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

export function getElementColor(element: GenshinElement){
    switch (element){
        case GenshinElement.Anemo:
            return("text-emerald-300")
        case GenshinElement.Geo:
            return("text-amber-300")
        case GenshinElement.Electro:
            return("text-fuchsia-600")
        case GenshinElement.Dendro:
            return("text-green-600")
        case GenshinElement.Hydro:
            return("text-blue-600")
        case GenshinElement.Pyro:
            return("text-orange-600")
        case GenshinElement.Cryo:
            return("text-blue-300")
    }
}

export function getRandomGenshinElement(){
    const index = Math.floor(Math.random() * Object.keys(GenshinElement).length);
    const values = Object.values(GenshinElement);
    return values[index];
}