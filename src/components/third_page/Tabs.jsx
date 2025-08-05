import {useState} from "react";
import {useTranslation} from "react-i18next";

function musicianHelper(musicians){
    const parts = [];
    for (let i = 0; i < musicians.length; i += 2) {
        parts.push(musicians.slice(i, i + 2));
    }
    return parts;
}
function Tabs({guitar}){
    const { t,i18n  } = useTranslation();
    console.log(guitar.musicians)
    const musicianPairs = musicianHelper(guitar.musicians)
    const [activeTab,setActiveTab] = useState("tab1")
    const [index, setIndex] = useState(0)
    const tabs = [
        {id:"tab1", label:t('specification')},
        {id:"tab2", label:t('whoPlays')}
    ]
    const tabContent= {
        tab1: (
            <div className="flex flex-col gap-10 items-center font-light pt-20">
                <div className="w-3/4">
                    <p>{guitar.description}</p>
                </div>
                <div className="w-2/3 pb-40">
                    <ul className="list-disc">
                        <li>Body Wood: "{guitar.specs.bodyWood}"</li>
                        <li>Neck Wood: "{guitar.specs.neckWood}"</li>
                        <li>Fingerboard: "{guitar.specs.fingerboardWood}"</li>
                        <li>Pickups: "{guitar.specs.pickups}"</li>
                        <li>Tuners: "{guitar.specs.tuners}"</li>
                        <li>Scale Length: "{guitar.specs.scaleLength}"</li>
                        <li>Bridge: "{guitar.specs.bridge}"</li>
                    </ul>
                </div>
            </div>
        ),
        tab2: (
            <div className="flex flex-col mt-10 h-150 w-screen">
                <div className="flex justify-center gap-5 h-3/4">
                    {musicianPairs[index].map((musician)=>{
                        return (
                            <div className="w-1/4 bg-orange-100 rounded-sm flex flex-col justify-center items-center p-2">
                                <img className="w-9/10 h-9/10" src={musician.musicianImage} alt="The picture isn't available" />
                                <p>{musician.name}</p>
                            </div>
                        )
                    })}
                </div>
                    <div className="flex justify-center space-x-2 pt-5">
                        {musicianPairs.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-4 h-4 rounded-full bg-gray-400 ${ index === i ? "-mt-1": ""}`}
                            ></button>
                        ))}
                    </div>
            </div>
        )
    }
    return (
        <>
            <div>
                {tabs.map((tab) => {
                    return (
                        <button key={tab.id}
                                className={`w-1/2 text-center ${activeTab === tab.id ? "text-orange-500 border-b-3 pb-2":"text-gray-600"}`}
                                onClick={() => setActiveTab(tab.id)}>
                            {tab.label}
                        </button>
                    );
                })}
            </div>
            <div>
                {tabContent[activeTab]}
            </div>
        </>
    )
}
export default Tabs