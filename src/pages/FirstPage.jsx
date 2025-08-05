import logo from "../assets/Butterfly.png"
import start_pic from "../assets/home_page_logo.jpg"
import icon from "../assets/icon.png"
import { gql, useQuery } from '@apollo/client';
import first_middle from "../assets/category-2.png"
import second_middle from "../assets/group.png"
import third_middle from "../assets/empty-wallet-tick.png"
import google_play from "../assets/google_play.png"
import apple_store from "../assets/apple_store.png"
import mobile_app from "../assets/mobile_app.jpg"
import Footer from "../components/Footer.jsx"
import { useTranslation } from 'react-i18next';



function FirstPage() {
    const GET_BRANDS = gql`
        query {
            findAllBrands {
              id
              image
            }
        }
    `
    const { t,i18n  } = useTranslation();
    const { loading, error, data } = useQuery(GET_BRANDS);
    if (loading){
        return (
            <div role="status" className="flex justify-center items-center h-screen">
                <svg aria-hidden="true" className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"/>
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
    if(error){
        return (<p>{error.message}</p>)
    }

    return (
        <>
            <div className="flex justify-between">
                <div className="flex flex-col w-1/3 items-start justify-between h-70 mt-10 ml-20">
                    <div className="flex gap-2">
                        <img src={logo}/>
                        <p className="text-lg">VibeStrings</p>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold text-center pb-1">{t('browseTopQuality')}<br/><span className="text-orange-500">{t('guitars')}</span> {t('online')}</h1>
                        <p className="text-gray-500 text-center">{t('headerDesc')} VibeStrings.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <img src={start_pic}/>
                    <img src={icon} className="w-[80px] h-[80px] -mt-9"/>
                </div>
            </div>

            <div className="mt-10">
                <h1 className="text-5xl font-bold text-center pb-1">{t('featurePart')} <span className="text-orange-500">{t('featureBestBrands')}</span></h1>
                <p className="text-gray-500 text-center">{t('featureSelect')}</p>
            </div>
            <div className="flex flex-wrap justify-evenly items-center mt-15 h-100">
                {data.findAllBrands.map(brand =>{
                    return (
                        <div className="w-1/5">
                            <a href={"/brand/"+brand.id}><img src={brand.image} className="w-1/2 h-1/2 grayscale mx-auto"/></a>
                        </div>
                    )
                })}
            </div>

            <div className="bg-black h-120 mt-50 flex flex-col justify-evenly">
                <h1 className="text-5xl text-center text-white ">{t('middleTitle')} <span className="text-orange-500">VibeStrings?</span></h1>
                <div className="flex justify-around">

                    <div className="flex flex-col items-center">
                        <div className="bg-stone-800 h-20 w-20 rounded-lg flex justify-center items-center">
                            <img src={first_middle}/>
                        </div>
                        <p className="text-white pt-3">{t('smooth')}</p>
                        <p className="text-gray-500 text-sm">{t('loremP1')},<br/> {t('loremP2')}</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-stone-800 h-20 w-20 rounded-lg flex justify-center items-center">
                            <img src={second_middle}/>
                        </div>
                        <p className="text-white uppercase pt-3">{t('easy')}</p>
                        <p className="text-gray-500 text-sm">{t('loremP1')},<br/> {t('loremP2')}</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-stone-800 h-20 w-20 rounded-lg flex justify-center items-center">
                            <img src={third_middle}/>
                        </div>
                        <p className="text-white pt-3">{t('swift')}</p>
                        <p className="text-gray-500 text-sm">{t('loremP1')},<br/> {t('loremP2')}</p>
                    </div>

                </div>
            </div>
            <div className="w-full flex h-150">
                <div className="flex flex-col items-center justify-center h-full w-1/2">
                    <h1 className="text-5xl text-center">
                        {t('endBrowseAndBuy')}<br/><span className="text-orange-500">{t('favGutiar')}</span> {t('with')} <br/>VibeStrings.
                    </h1>
                    <div className="flex justify-between gap-5 pt-10">
                        <a href="#"><img src={google_play}/></a>
                        <a href="#"><img src={apple_store}/></a>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center h-full w-1/2">
                    <img src={mobile_app} className="h-150"/>
                </div>
            </div>
           <Footer/>
        </>

    )
}

export default FirstPage
