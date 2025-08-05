import {gql, useLazyQuery, useQuery} from "@apollo/client";
import {useState} from "react";
import {useParams} from "react-router-dom";
import Card from "./Card.jsx"
import filter from "../../assets/filter.png"
import search from "../../assets/search.png"
import {useTranslation} from "react-i18next";

function Pagination(){
    const { t,i18n  } = useTranslation();
    const { id } = useParams();
    let [name, setName] = useState("")
    let [page, setPage] = useState(1)
    const pageSize = 6;
    const [order, setOrder] = useState("ASC")
    let [field, setField] = useState("name")
    let sortBy = {
        field: field,
        order: order
    }


    const FIND_BRAND_MODELS = gql`
        query($id: ID!, $sortBy: sortBy!){
            findBrandModels(id: $id, sortBy: $sortBy){
                id,
                name,
                price,
                image,
            }
        }
    `
    const SEARCH_MODELS = gql`
            query($id: String!, $name: String!){
                searchModels(brandId: $id, name: $name){
                    id,
                    name,
                    price,
                    image,
                }

            }
        `
    const [searchModels, { data: dataSearching, loading: searchLoading, error: errorSearching }] = useLazyQuery(SEARCH_MODELS);

    const { loading: loadingModels, error: errorModels, data: dataModels } = useQuery(FIND_BRAND_MODELS, {
        variables: { id, sortBy }
    });

    if(loadingModels){
        return (<p>Loading models...</p>)
    }
    if(errorModels){
        return <p>{errorModels.message}</p>
    }

    const start = (page - 1) * pageSize;
    const finish = Math.min(start + pageSize, dataModels.findBrandModels.length);
    const totalPages = Math.ceil(dataModels.findBrandModels.length / pageSize);

    const handlePrevious = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    const handleNext = () => {
        if (page < totalPages)
            setPage((prev) => prev + 1);
    };

    const handleSpecificPage = (pageNumber) => {
        const newPage = Math.min(Math.max(pageNumber, 1), totalPages);
        console.log(newPage)
        setPage(newPage);
    };

    const handleNameFilter = (event) =>{
        const name = event.target.value
        setName(name)
        searchModels({ variables: { id, name: name } });
        
    }

    return (<div className="mt-10">
        <div className="flex justify-center mb-5">
            <div className="border border-gray-500 w-40 h-5 flex items-center">
                <button><img src={filter} className="w-5 h-5"/></button>
                <select className="text-gray-500 border-0 w-full text-center">
                    <option>Bass</option>
                    <option>Acoustic</option>
                    <option>Electric</option>
                </select>
            </div>
            <div className="ms-2 border border-gray-500 w-40 h-5 flex items-center">
                <button><img src={search} className="w-5 h-5"/></button>
                <input type="text" className="w-full h-5" placeholder={t('byName')} onChange={handleNameFilter}/>
            </div>
        </div>
        <div className="flex flex-wrap justify-start">
            {
                dataModels.findBrandModels.slice(start,finish).map(model=>{
                    return (
                        <Card name={model.name} price={model.price} image={model.image} braindId={id} modelId={model.id}/>
                    )
                })
            }
        </div>
        <div className="flex justify-around pt-5">
            <span className="text-gray-500">{t('showing')} <span className="text-black">{dataModels.findBrandModels.slice(start,finish).length}</span> {t('resFrom')} <span className="text-black">{dataModels.findBrandModels.length}</span></span>
            <div>
                <nav className="flex items-center gap-x-1" aria-label="Pagination">
                    <button type="button" onClick={handlePrevious} className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-label="Previous">
                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </button>
                    <div className="flex items-center gap-x-1">
                        <button type="button" onClick={() => handleSpecificPage(1)} className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" aria-current="page">1</button>
                        <button type="button" onClick={() => handleSpecificPage(2)} className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">2</button>
                        <button type="button" onClick={() => handleSpecificPage(3)} className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">3</button>
                    </div>
                    <button type="button" onClick={handleNext} className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-label="Next">
                        <span className="sr-only">Next</span>
                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </button>
                </nav>
            </div>
        </div>
    </div>)
}
export default Pagination