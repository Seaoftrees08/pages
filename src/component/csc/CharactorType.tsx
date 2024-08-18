import {GenshinElement, GenshinElementsLogo} from "@/component/csc/GenshinElementsLogo";
import {GenshinWeapon, GenshinWeaponsLogo} from "@/component/csc/GenshinWeaponsLogo";
import TestComponent from "@/component/csc/TestComponent";

type Props = {
    element: GenshinElement,
    weapons: GenshinWeapon
};

export default function CharactorType(props: Props) {

    const {element, weapons} = props;

    return(
        <div className="flex-col">
            <TestComponent num={0}/>
        </div>
    )
}