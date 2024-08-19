import {Button, Select, Stack, Switch} from "@chakra-ui/react";
import {GenshinElement, getElementColor} from "@/component/csc/GenshinElementsLogo";
import {GenshinWeapon} from "@/component/csc/GenshinWeaponsLogo";
import {CharacterType} from "@/component/csc/CharacterTypeWindow";
import FilterCharacterTypeList from "@/component/csc/FilterCharacterTypeList";
import {useState} from "react";


export default function SideSettings(props: {
    toggleAllowDuplicates: () => void,
    allowDuplicates: boolean
    filterCharaType: CharacterType[],
    addFilter: (cType: CharacterType) => void,
    removeFilter: (cType: CharacterType) => void,
}) {

    const {
        toggleAllowDuplicates,
        allowDuplicates,
        filterCharaType,
        addFilter,
        removeFilter
    } = props;

    const [selectedElement, setSelectedElement] = useState<GenshinElement>(GenshinElement.Anemo);
    const [selectedWeapon, setSelectedWeapon] = useState<GenshinWeapon>(GenshinWeapon.Swords);

    const handleAddFilter = () => {
        const newFilter: CharacterType = {
            element: selectedElement,
            weapon: selectedWeapon
        };
        addFilter(newFilter);
    }

    return (
        <div className="p-8 w-1/3 h-screen bg-gray-800 text-slate-200">
            <p className="border-b border-gray-600 p-1 text-center text-xl">Settings</p>
            <Stack direction="row" className="items-center">
                <p className="">重複の許可:</p>
                <Switch size='lg' className="my-4" defaultChecked={allowDuplicates}
                        onChange={toggleAllowDuplicates}/>
            </Stack>

            <p className="border-b border-gray-600 p-1 text-center text-xl">Filters</p>
            <Stack direction="row" className="items-center mt-4">
                <p className="min-w-10">元素:</p>
                <Select placeholder={undefined} onChange={(e) => setSelectedElement(e.target.value as GenshinElement)}>
                    <option value={GenshinElement.Anemo} className={getElementColor(GenshinElement.Anemo)}>風
                    </option>
                    <option value={GenshinElement.Geo} className={getElementColor(GenshinElement.Geo)}>岩</option>
                    <option value={GenshinElement.Electro} className={getElementColor(GenshinElement.Electro)}>雷
                    </option>
                    <option value={GenshinElement.Dendro} className={getElementColor(GenshinElement.Dendro)}>草
                    </option>
                    <option value={GenshinElement.Hydro} className={getElementColor(GenshinElement.Hydro)}>水
                    </option>
                    <option value={GenshinElement.Pyro} className={getElementColor(GenshinElement.Pyro)}>炎</option>
                    <option value={GenshinElement.Cryo} className={getElementColor(GenshinElement.Cryo)}>氷</option>
                </Select>
                <p className="min-w-10">武器:</p>
                <Select placeholder={undefined} onChange={(e) => setSelectedWeapon(e.target.value as GenshinWeapon)}>
                    <option value={GenshinWeapon.Swords}>片手剣</option>
                    <option value={GenshinWeapon.Claymores}>両手剣</option>
                    <option value={GenshinWeapon.Polearms}>槍</option>
                    <option value={GenshinWeapon.Catalysts}>法器</option>
                    <option value={GenshinWeapon.Bows}>弓</option>
                </Select>
                <Button colorScheme='blue' onClick={handleAddFilter}>追加</Button>
            </Stack>

            <p className={filterCharaType.length >= 20 ? "text-red-600" : "hidden"}>フィルタは最大20種類までです。</p>

            <FilterCharacterTypeList
                filterCharacterTypes={filterCharaType}
                removeFilter={removeFilter}
            />

        </div>
    )
}