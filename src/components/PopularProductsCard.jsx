
const PopularProductsCard = ( {imgURL, name, price} ) => {

    return(
        <div>
            
            <div className="flex justify-center items-center rounded-xl">
                {imgURL && <img 
                    src={imgURL}
                    alt="Product Image"
                    height={300}
                    width={300}
                />}
            </div>


        </div>
    );
};

export default PopularProductsCard;