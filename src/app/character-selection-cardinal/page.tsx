
import { Metadata } from 'next';
import Cardinal from "@/component/csc/Cardinal";

export const metadata: Metadata = {
    title: 'キャラ選定カーディナル',
    description: 'Genshin Impactのキャラ編成に迷ったあなたへ',
};

export default function Home() {

    return (
        <>
            <Cardinal/>
        </>
    );
}
