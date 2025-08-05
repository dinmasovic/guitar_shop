import {useParams} from "react-router-dom";
import logo from "../assets/Butterfly.png";
import icon from "../assets/icon.png";
import left from "../assets/left.png"
import { gql, useQuery } from '@apollo/client';
import header from "../assets/second_page_header.png"
import Pagination from "../components/second_page/Pagination.jsx"
import Footer from "../components/Footer.jsx";
import {useTranslation} from "react-i18next";

function BrandPage(){
    const { id } = useParams();
    const { t,i18n  } = useTranslation();

    const GET_SPECIFIC_BRAND = gql`
        query($id: ID!) {
            findUniqueBrand(id: $id) {
                image
             }
        }
    `;


    const { loading, error, data } = useQuery(GET_SPECIFIC_BRAND, {
        variables: { id }
    });


    if (loading){
        return (<div role="status" className="flex justify-center items-center h-screen">
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
        </div>)
    }
    if(error){
        return (<p>{error.message}</p>)
    }



    return(
        <>
            <div className="flex justify-between h-150">
                <div className="flex flex-col w-1/3 items-start justify-between h-70 mt-5 ml-20">
                    <div>
                        <a href="/" className="flex gap-2">
                            <img src={left}/> {t('backToHome')}
                        </a>
                    </div>
                    <div className="flex gap-2 mt-10">
                        <img src={logo}/>
                        <p className="text-lg">VibeStrings</p>
                    </div>
                    <div className="flex flex-col gap-10 mt-10">
                        <h1 className="text-5xl font-bold text-center">{t('playLikeA')} <span className="text-orange-500">{t('rockstar')}</span></h1>
                        <p className="text-gray-500 text-center">{t('chatgptP1')}
                            <br/>{t('chatgptP2')}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-around items-center h-[459px] w-[672px]" style={{ backgroundImage: `url(${header})`, backgroundRepeat: 'no-repeat'}}>
                    <img src={data.findUniqueBrand.image} className="h-50 opacity-50"/>
                    <img src={icon} className="pt-55"/>
                </div>
            </div>

            <div >
                <h1 className="text-5xl font-bold text-center">{t('checkOutThe')} <span className="text-orange-500">{t('selection')}</span></h1>
                <Pagination/>
            </div>
            <Footer/>
        </>
    )
}

export default BrandPage