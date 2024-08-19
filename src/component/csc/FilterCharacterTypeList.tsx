import {CharacterType} from "@/component/csc/CharacterTypeWindow";
import {Button, Stack} from "@chakra-ui/react";
import GenshinElementsLogo from "@/component/csc/GenshinElementsLogo";
import GenshinWeaponsLogo from "@/component/csc/GenshinWeaponsLogo";

export default function FilterCharacterTypeList(props: {
    filterCharacterTypes: CharacterType[],
    removeFilter: (cType: CharacterType) => void
}){

    const {
        filterCharacterTypes,
        removeFilter,
    } = props;

    return (
        <div className="border border-gray-400 w-fill h-2/3 my-4 overflow-auto">

            {filterCharacterTypes.map((ct, index) => (
                <Stack direction="row" key={index} className="py-4 px-4 justify-between items-center">
                    <Stack direction="row" className="items-center">
                        <p>元素: {ct.element}</p>
                        <GenshinElementsLogo element={ct.element} size={32} margin={1}/>
                        <p>&nbsp;&nbsp;</p>
                        <p className="ml-4">武器: {ct.weapon}</p>
                        <GenshinWeaponsLogo weapon={ct.weapon} size={32} margin={1}/>
                    </Stack>
                    <Button className="" colorScheme='blue' size="sm" onClick={() => removeFilter(ct)}>削除</Button>
                </Stack>
            ))}

        </div>

    )
}