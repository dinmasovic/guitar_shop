import logo from "../assets/Butterfly.png";
import sms from "../assets/sms.png";
import location from "../assets/location.png";
import facebook from "../assets/Facebook.png";
import twitter from "../assets/Twitter.png";
import instagram from "../assets/Instagram.png";
import {useTranslation} from "react-i18next";

function Footer(){
    const { t,i18n  } = useTranslation();
    return (
        <>
        <div className="bg-gray-300 h-100 flex justify-around items-center">
            <div className="w-25 h-1/2 flex flex-col justify-start items-center gap-5">
                <div className="flex gap-2">
                    <img src={logo} className="w-[50px] h-[50px]"/>
                    <p className="text-4xl">VibeStrings</p>
                </div>
                <div className="flex gap-2">
                    <img src={sms}/>
                    <p className="text-gray-700">Enquiry@VibeStrings.com</p>
                </div>
                <div className="flex gap-2">
                    <img src={location}/>
                    <p className="text-gray-700">Enquiry@VibeStrings.com</p>
                </div>
            </div>

            <div className="w-25 h-1/2 flex flex-col justify-start items-center gap-5">
                <h1 className="font-bold">Pages</h1>
                <a href="#" className="text-gray-700">{t('store')}</a>
                <a href="#" className="text-gray-700">{t('collections')}</a>
                <a href="#" className="text-gray-700">{t('support')}</a>
            </div>

            <div className="w-25 h-1/2 flex flex-col justify-start items-center gap-5">
                <h1 className="font-bold">Product</h1>
                <a href="#" className="text-gray-700">{t('terms')}</a>
                <a href="#" className="text-gray-700">{t('privacyPolicy')}</a>
                <a href="#" className="text-gray-700">{t('copyright')}</a>
            </div>

            <div className="w-25 h-1/2 flex flex-col justify-start items-center gap-5">
                <h1 className="font-bold">{t('followUs')}</h1>
                <div className="flex gap-2">
                    <a href="#"><img src={facebook}/></a>
                    <a href="#"><img src={twitter}/></a>
                    <a href="#"><img src={instagram}/></a>
                </div>
                <p className="font-bold text-center">{t('changeLanguage')}</p>
                <div className="flex gap-2 text-gray-700">
                   <button onClick={() => {i18n.changeLanguage('en');window.location.reload()}}>en</button>
                   <button onClick={() => {i18n.changeLanguage('mk');window.location.reload()}}>mk</button>
                   <button onClick={() => {i18n.changeLanguage('alb');window.location.reload()}}>alb</button>
                </div>
            </div>
        </div>
    <div className="bg-gray-300">
        <p className="text-center text-gray-700 pb-5">© 2022 Copyright.VibeStrings</p>
    </div>
        </>
    )
}
export default Footer