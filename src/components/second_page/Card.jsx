function Card({ name, price, image , braindId, modelId,}){
    console.log("Guitar image: "+image)
    return (
       <a href={"/guitar/"+braindId+"/"+modelId} className="w-1/3">
           <div className="rounded">
            <img className="w-full" src={image} alt="The picture isn't available" />

            <div className="px-6 pt-4 pb-2 flex flex-col justify-between">
                <p>{name}</p>
                <p className="text-gray-500 ">${price}</p>
            </div>
       </div>
       </a>
    )
}

export default Card