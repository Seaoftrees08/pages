import GenshinElementsLogo, {GenshinElement, getRandomGenshinElement} from "@/component/csc/GenshinElementsLogo";
import GenshinWeaponsLogo, {GenshinWeapon, getRandomGenshinWeapon} from "@/component/csc/GenshinWeaponsLogo";

export type CharacterType = {
    element: GenshinElement,
    weapon: GenshinWeapon
};

export default function CharacterTypeWindow({characterType: characterType = getRandomCharacter([])}) {

    const {element, weapon} = characterType;

    return(
        <div className="">
            <div className="">
                <GenshinElementsLogo element={element} />
            </div>
            <div className="">
                <GenshinWeaponsLogo weapon={weapon} />
            </div>
        </div>
    )
}

/**
 * filterと被りのないCharacterTypeを返す
 * @param filter 重複してはいけないキャラクタータイプの配列
 */
export function getRandomCharacter(filter: CharacterType[]): CharacterType{
    let randomCharacter: CharacterType;

    do {
        randomCharacter = {
            element: getRandomGenshinElement(),
            weapon: getRandomGenshinWeapon()
        };
    } while (filter.some(char => char.element === randomCharacter.element && char.weapon === randomCharacter.weapon));

    return randomCharacter;
}