
export default function ProductRestaurantCard(props){
    return(
        <div className='bg-cardBackground rounded-md p-2.5 flex flex-col justify-between'>
            <div>
                <div className='pb-[100%] w-full bg-black rounded-md' style={{background: `url(/products/${props.productImage}) center center/cover no-repeat`}}></div>
                <h3 className='text-lg my-2 font-light'>{props.productName}</h3>
            </div>
            <div className=''>
                <h4>{props.productPrice}р</h4>
                <h5 className='text-muted'>{props.productWeight}г</h5>
                <div className='button product_card mt-3'>Добавить</div>
            </div>
        </div>
    )
}